using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Services
{
    public class ProjectService
    {
        private readonly ApplicationDbContext _context;
        public ProjectService(ApplicationDbContext context)
        {
            _context = context;
        }

        //createProject
        public async Task<bool> CreateProject(Project newProject)
        {
            _context.Projects.Add(newProject);
            await _context.SaveChangesAsync();
            return true;
        }
        //getAllProjects
        public async Task<IEnumerable<Project>> GetAllProjects()
        {
            return await _context.Projects.ToListAsync();
        }
        //getProjectById/:projectId
        public async Task<Project> GetProjectById(int projectId)
        {
            return await _context.Projects.FirstOrDefaultAsync(c => c.ProjectId == projectId);
        }
        //updateProject/:projectId
        public async Task<bool> UpdateProject(int projectId, Project project)
        {
            var existingProject = await _context.Projects.FirstOrDefaultAsync(c => c.ProjectId == projectId);
            if (existingProject == null)
            {
                return false;
            }
            _context.Entry(existingProject).CurrentValues.SetValues(project);
            await _context.SaveChangesAsync();
            return true;
        }
        //deleteProject/:projectId
        public async Task<bool> DeleteProject(int projectId)
        {
            var existingProject = await _context.Projects.FirstOrDefaultAsync(c => c.ProjectId == projectId);
            if (existingProject == null)
            {
                return false;
            }
            _context.Projects.Remove(existingProject);
            await _context.SaveChangesAsync();
            return true;
        }

        //getProjectByUserID/:userId

        
    }
}
