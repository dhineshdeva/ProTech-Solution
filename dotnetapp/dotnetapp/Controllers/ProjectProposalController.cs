using dotnetapp.Models;
using dotnetapp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProjectProposalController : ControllerBase
    {
        private readonly ProjectProposalService _projectProposalService;

        public ProjectProposalController(ProjectProposalService projectProposalService)
        {
            _projectProposalService = projectProposalService;
        }

        [Authorize(Roles = "Employee,Manager")]
        //getAllProposals
        [HttpGet("getAllProposals")]
        public async Task<ActionResult<IEnumerable<ProjectProposal>>> GetAllProposals()
        {
            var proposals = await _projectProposalService.GetAllProposals();
            if (proposals == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(proposals);
            }
        }

        //getProposalById/:proposalId":
        [HttpGet("getProposalById/{proposalId}")]
        public async Task<ActionResult<ProjectProposal>> GetProposalById(int proposalId)
        {
            var proposal = await _projectProposalService.GetProposalById(proposalId);
            if (proposal == null)
                return NotFound(new { message = "Cannot Find any Proposal" });
            return Ok(proposal);
        }

        //createProposal
        [Authorize(Roles = "Employee")]
        [HttpPost("createProposal")]
        public async Task<ActionResult> CreateProposal([FromBody] ProjectProposal proposal)
        {
            try
            {
                var sucess = await _projectProposalService.CreateProposal(proposal);
                if (sucess)
                {
                    return Ok(new { message = "Proposal added sucessfully" });
                }
                else
                {
                    return StatusCode(500, new { message = "Failed to add Proposal" });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        //updateProposal/:proposalId
        [Authorize(Roles = "Employee,Manager")]
        [HttpPut("updateProposal/{proposalId}")]
        public async Task<ActionResult> UpdateCropByCropId(int proposalId, [FromBody] ProjectProposal proposal)
        {
            try
            {
                var sucess = await _projectProposalService.updateProposal(proposalId, proposal);

                if (sucess)
                    return Ok(new { message = "Proposal updated sucessfully" });
                else
                    return StatusCode(500, new { message = "Cannot find any Proposal" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
        //deleteProposal/:proposalId
        [Authorize(Roles = "Employee")]
        [HttpDelete("deleteProposal/{proposalId}")]
        public async Task<ActionResult> DeleteProposal(int proposalId)
        {
            try
            {
                var sucess = await _projectProposalService.DeleteProposal(proposalId);
                if (sucess)
                    return Ok(new { message = "Proposal deleted sucessfully" });
                else
                    return StatusCode(500, new { message = "Cannot find any Proposal" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }
}
