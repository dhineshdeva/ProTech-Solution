using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectService _projectService;
        public ProjectController(ProjectService projectService)
        {
            _projectService = projectService;
        }
        //createProject
        

        [HttpPost("createProject")]
        public async Task<ActionResult> CreateProject([FromBody] Project project)
        {
            try
            {
                var sucess = await _projectService.CreateProject(project);
                if (sucess)
                {
                    return Ok(new { message = "Project added sucessfully" });
                }
                else
                {
                    return StatusCode(500, new { message = "Failed to add Project" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        [Authorize(Roles = "Employee")]
        //getAllProjects
        [HttpGet("getAllProjects")]
        public async Task<ActionResult<IEnumerable<Project>>> GetAllProjects()
        {
            var projects = await _projectService.GetAllProjects();
            if (projects == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(projects);
            }
        }
        //getProjectById/:projectId
        [HttpGet("getProjectById/:projectId")]
        public async Task<ActionResult<Project>> GetCropByCropID(int projectId)
        {
            var crop = await _projectService.GetProjectById(projectId);
            if (crop == null)
                return NotFound(new { message = "Cannot Find any Project" });
            return Ok(crop);
        }

        //updateProject/:projectId
        [HttpPut("updateProject/:projectId")]
        public async Task<ActionResult> UpdateCropByCropId(int projectId, [FromBody] Project project)
        {
            try
            {
                var sucess = await _projectService.UpdateProject(projectId, project);

                if (sucess)
                    return Ok(new { message = "Project updated sucessfully" });
                else
                    return StatusCode(500, new { message = "Cannot find any Project" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        //deleteProject/:projectId
        [HttpDelete("deleteProject/:projectId")]
        public async Task<ActionResult> DeleteCropByCropID(int projectId)
        {
            try
            {
                var sucess = await _projectService.DeleteProject(projectId);
                if (sucess)
                    return Ok(new { message = "Project deleted sucessfully" });
                else
                    return StatusCode(500, new { message = "Cannot find any Project" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //getProjectByUserID/:userId

    }
}
