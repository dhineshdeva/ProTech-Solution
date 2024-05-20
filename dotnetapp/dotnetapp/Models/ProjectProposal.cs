using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class ProjectProposal
    {
        [Key]
       
        public int ProposalId { get; set; }
        [Required(ErrorMessage = "UserId  is Required")]
        public int UserId { get; set; }
        [Required(ErrorMessage = "ProposalTitle is Required")]
        public string ProposalTitle { get; set; }
        [Required(ErrorMessage = "ProposalDescription is Required")]
        public string ProposalDescription { get; set; }
        [Required(ErrorMessage = "status is Required")]
        public string status { get; set; }

        public virtual User? User { get; set; }
    }
}
