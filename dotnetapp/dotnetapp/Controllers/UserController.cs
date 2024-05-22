using dotnetapp.Data;
using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IAuthService _authService;
        private readonly ApplicationDbContext _context;
        public UserController(IAuthService authService, ApplicationDbContext context)
        {
            _authService = authService;
            _context = context;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(new { Status = "Error", Message = "Invalid Payload" });
                var (status, message) = await _authService.Login(model);
                if (status == 0)
                    return BadRequest(new { Status = "Error", Message = message });
                return Ok(new { Status = "Success", token = message });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(User model)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(new { Status = "Error", Message = "Invalid Payload" });

                if (model.Role == "Manager" || model.Role == "Employee")
                {
                    var (status, message) = await _authService.Registration(model, model.Role);

                    if (status == 0)
                    {
                        return BadRequest(new { Status = "Error", Message = message });
                    }

                    return Ok(new { Status = "Success", Message = message });
                }
                else
                {
                    return BadRequest(new { Status = "Error", Message = "Invalid user role" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [Authorize(Roles ="Manager")]
        [HttpGet("getAllEmployees")]
        public async Task<ActionResult<IEnumerable<User>>> GetAllEmployees()
        {
            var employees = await _authService.GetAllEmployees();
            if (employees == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(employees);
            }
        }
    }
}

