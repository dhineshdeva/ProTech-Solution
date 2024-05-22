    using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {


        private readonly FeedbackService _feedbackService;
        public FeedbackController(FeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }
        //getAllFeedbacks
        [Authorize(Roles ="Manager")]
        [HttpGet("getAllFeedbacks")]
        public async Task<ActionResult<IEnumerable<Feedback>>> GetAllFeedbacks()
        {
            var feedbacks = await _feedbackService.GetAllFeedbacks();
            if (feedbacks == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(feedbacks);
            }
        }
        //getFeedbacksByUserId
        [Authorize(Roles ="Employee")]
        [HttpGet("getFeedbacksByUserId/{userId}")]
        public async Task<ActionResult<Feedback>> GetFeedbacksByUserId(int userID)
       {
            var feedback = await _feedbackService.GetFeedbacksByUserId(userID);
            if (feedback == null)
                return NotFound(new { message = "Cannot Find any FeedBack" });
            return Ok(feedback);
        }

        [Authorize(Roles = "Employee")]

        //addFeedback
        [HttpPost("addFeedback")]
        public async Task<ActionResult> AddFeedback([FromBody] Feedback feedback)
        {
            try
            {
                var sucess = await _feedbackService.AddFeedback(feedback);
                if (sucess)
                {
                    return Ok(new { message = "Feedback added sucessfully" });
                }
                else
                {
                    return StatusCode(500, new { message = "Failed to add Feedback" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }

}
