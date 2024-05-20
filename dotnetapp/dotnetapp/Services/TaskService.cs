using dotnetapp.Data;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Services
{
    public class TaskService
    {
        private readonly ApplicationDbContext _context;
        public TaskService(ApplicationDbContext context)
        {
            _context = context;
        }
        //createTask
        public async Task<bool> CreateTask(Tasks newTask)
        {
            _context.Tasks.Add(newTask);
            await _context.SaveChangesAsync();
            return true;
        }
        //getAllTasks
        public async Task<IEnumerable<Tasks>> GetAllTasks()
        {
            return await _context.Tasks.ToListAsync();
        }
        //getTaskById/:taskId
        public async Task<Tasks> GetTaskById(int taskId)
        {
            return await _context.Tasks.FirstOrDefaultAsync(c => c.TaskId == taskId);
        }
        //updateTask/:taskId
        public async Task<bool> UpdateTask(int taskId, Tasks newtask)
        {
            var existingTask = await _context.Tasks.FirstOrDefaultAsync(c => c.TaskId == taskId);
            if (existingTask == null)
            {
                return false;
            }
            _context.Entry(existingTask).CurrentValues.SetValues(newtask);
            await _context.SaveChangesAsync();
            return true;
        }
        //deleteTask/:taskId
        public async Task<bool> DeleteTask(int taskId)
        {
            var existingTask = await _context.Tasks.FirstOrDefaultAsync(c => c.TaskId == taskId);
            if (existingTask == null)
            {
                return false;
            }
            _context.Tasks.Remove(existingTask);
            await _context.SaveChangesAsync();
            return true;
        }
        //getTaskByUserId/:userId
        public async Task<IEnumerable<Tasks>> GetTaskByUserId(int userId)
        {
            return await _context.Tasks.Where(c => c.AssignedTo == userId).ToListAsync();          

        }


    }
}
