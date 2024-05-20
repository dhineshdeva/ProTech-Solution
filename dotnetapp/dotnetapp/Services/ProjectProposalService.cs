using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Services
{
    public class ProjectProposalService
    {
        private readonly ApplicationDbContext _context;
        public ProjectProposalService(ApplicationDbContext context)
        {
            _context = context;
        }
        //getAllProposals
        public async Task<IEnumerable<ProjectProposal>> GetAllProposals()
        {
            return await _context.Project_Proposals.ToListAsync();
        }
        //getProposalById/:proposalId":
        public async Task<ProjectProposal> GetProposalById(int proposalId)
        {
            return await _context.Project_Proposals.FirstOrDefaultAsync(x => x.ProposalId == proposalId);
            
        }
        //createProposal
        public async Task<bool> CreateProposal(ProjectProposal projectProposal)
        {
            _context.Project_Proposals.Add(projectProposal);
            await _context.SaveChangesAsync();
            return true;
        }

        //updateProposal/:proposalId
        public async Task<bool> updateProposal(int proposalId, ProjectProposal projectProposal)
        {
            var existingProposal = await _context.Project_Proposals.FirstOrDefaultAsync(c => c.ProposalId == proposalId);
            if (existingProposal == null)
            {
                return false;
            }
            _context.Entry(existingProposal).CurrentValues.SetValues(projectProposal);
            await _context.SaveChangesAsync();
            return true;
        }
        //deleteProposal/:proposalId
        public async Task<bool> DeleteProposal(int proposalId)
        {
            var proposal = await _context.Project_Proposals.FirstOrDefaultAsync(c => c.ProposalId == proposalId);
            if (proposal == null)
            {
                return false;
            }
            _context.Project_Proposals.Remove(proposal);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
