using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TasksController(TaskService taskService)
        {
            _taskService = taskService;
        }

        //createTask
        [HttpPost("createTask")]
        public async Task<ActionResult> CreateTask([FromBody] Tasks newtask)
        {
            try
            {
                var sucess = await _taskService.CreateTask(newtask);
                if (sucess)
                {
                    return Ok(new { message = "Task added sucessfully" });
                }
                else
                {
                    return StatusCode(500, new { message = "Failed to add Task" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }

        //getAllTasks
        [HttpGet("getAllTasks")]
        [Authorize(Roles = "Employee")]
        public async Task<ActionResult<IEnumerable<Tasks>>> GetAllTasks()
        {
            var taskList = await _taskService.GetAllTasks();
            if (taskList == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(taskList);
            }
        }
        //getTaskById/:taskId
        [HttpGet("getTaskById/:taskId")]
        public async Task<ActionResult<Tasks>> GetTaskById(int taskId)
        {
            var existingtask = await _taskService.GetTaskById(taskId);
            if (existingtask == null)
                return NotFound(new { message = "Cannot Find any Task" });
            return Ok(existingtask);
        }
        //updateTask/:taskId
        [Authorize(Roles = "Employee,Manager")]
        [HttpPut("updateTask/:taskId")]
        public async Task<ActionResult> updateTask(int taskId, [FromBody] Tasks newTask)
        {
            try
            {
                var sucess = await _taskService.UpdateTask(taskId, newTask);

                if (sucess)
                    return Ok(new { message = "Task updated sucessfully" });
                else
                    return StatusCode(500, new { message = "Cannot find any Task" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        //deleteTask/:taskId
        [HttpDelete("deleteTask/:taskId")]
        public async Task<ActionResult> DeleteTask(int taskId)
        {
            try
            {
                var sucess = await _taskService.DeleteTask(taskId);
                if (sucess)
                    return Ok(new { message = "Task deleted sucessfully" });
                else
                    return StatusCode(500, new { message = "Cannot find any Task" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        //getTaskByUserId/:userId

        [HttpGet("getTaskByUserId/:userId")]
        public async Task<ActionResult<Tasks>> GetTaskByUserId(int userId)
        {
            var taskbyuser = await _taskService.GetTaskByUserId(userId);
            if (taskbyuser == null)
                return NotFound(new { message = "Cannot Find any task For User" });
            return Ok(taskbyuser);
        }
    }
}
