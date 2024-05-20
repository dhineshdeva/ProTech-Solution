using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Feedback
    {
        [Key]
        public int FeedbackId { get; set; }

        [ForeignKey("userId")]
        public int UserId { get; set; }

        public string FeedbackText { get; set; }
        public DateTime Date { get; set; }

        public User? User { get; set; }
    }
}
