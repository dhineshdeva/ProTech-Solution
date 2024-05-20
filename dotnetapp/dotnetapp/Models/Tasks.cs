using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetapp.Models
{
    public class Tasks
    {
        [Key]
        public int TaskId { get; set; }
        [Required(ErrorMessage = "ProjectId is Required")]
        [ForeignKey(nameof(Project))]
        public int ProjectId { get; set; }
        [Required(ErrorMessage = "TaskTitle is Required")]
        public string TaskTitle { get; set; }
        [Required(ErrorMessage = "TaskDescription is Required")]
        public string TaskDescription { get; set; }
        [Required(ErrorMessage = "AssignedTo is Required")]
        [ForeignKey(nameof(Tasks))]
        public int AssignedTo { get; set; }
        [Required(ErrorMessage = "Status is Required")]
        public string Status { get; set; }       
        public DateTime? DueDate { get; set; }        
        public DateTime? StartDate { get; set; }       
        public DateTime? CompletedDate { get; set; }
        [Required(ErrorMessage = "is Required")]
        public string Priority { get; set; }

        public User? User { get; set; }
        public Project Project { get; set; }



    }
}
