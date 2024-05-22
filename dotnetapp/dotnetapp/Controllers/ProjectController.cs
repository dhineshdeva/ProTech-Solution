using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectService _projectService;
        public ProjectController(ProjectService projectService)
        {
            _projectService = projectService;
        }
        //createProject

        [Authorize(Roles = "Manager")]
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


        //getAllProjects      
        [Authorize(Roles = "Manager,Employee")]
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

        [Authorize(Roles = "Manager")]
        //getProjectById/:projectId
        [HttpGet("getProjectById/{projectId}")]
        public async Task<ActionResult<Project>> GetProjectByProjectID(int projectId)
        {
            var project = await _projectService.GetProjectById(projectId);
            if (project == null)
                return NotFound(new { message = "Cannot Find any Project" });
            return Ok(project);
        }

        //updateProject/:projectId
        [Authorize(Roles = "Manager")]
        [HttpPut("updateProject/{projectId}")]
        public async Task<ActionResult> UpdateProjectByProjectId(int projectId, [FromBody] Project project)
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
        [Authorize(Roles = "Manager")]
        [HttpDelete("deleteProject/{projectId}")]
        public async Task<ActionResult> DeleteProjectByProjectId(int projectId)
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
