using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        [Required(ErrorMessage = "ProposalId is Required")]
        public string ProposalId { get; set; }
        [Required(ErrorMessage = "ProjectTitle is Required")]
        public string ProjectTitle { get; set; }
        [Required(ErrorMessage = "is Required")]
        public string ProjectDescription { get; set; }
        [Required(ErrorMessage = "StartDate is Required")]
        public DateTime StartDate { get; set; }
        [Required(ErrorMessage = "EndDate is Required")]
        public DateTime EndDate { get; set; }
        [Required(ErrorMessage = "is Required")]
        public string Status { get; set; }
        [Required(ErrorMessage = "FrontEndTechStack is Required")]
        public string FrontEndTechStack { get; set; }
        [Required(ErrorMessage = "BackendEndTechStack is Required")]

        public string BackendEndTechStack { get; set; }
        [Required(ErrorMessage = "Database is Required")]
        public string Database { get; set; }

        public virtual ProjectProposal? Project_Proposal { get; set; }

    }
}
