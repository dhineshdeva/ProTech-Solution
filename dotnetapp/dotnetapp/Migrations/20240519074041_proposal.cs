using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class proposal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Proposals_ProposalId1",
                table: "Projects");

            migrationBuilder.DropTable(
                name: "Proposals");

            migrationBuilder.RenameColumn(
                name: "ProposalId1",
                table: "Projects",
                newName: "Project_ProposalProposalId");

            migrationBuilder.RenameIndex(
                name: "IX_Projects_ProposalId1",
                table: "Projects",
                newName: "IX_Projects_Project_ProposalProposalId");

            migrationBuilder.CreateTable(
                name: "Project_Proposals",
                columns: table => new
                {
                    ProposalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ProposalTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProposalDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Project_Proposals", x => x.ProposalId);
                    table.ForeignKey(
                        name: "FK_Project_Proposals_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Project_Proposals_UserId",
                table: "Project_Proposals",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Project_Proposals_Project_ProposalProposalId",
                table: "Projects",
                column: "Project_ProposalProposalId",
                principalTable: "Project_Proposals",
                principalColumn: "ProposalId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Project_Proposals_Project_ProposalProposalId",
                table: "Projects");

            migrationBuilder.DropTable(
                name: "Project_Proposals");

            migrationBuilder.RenameColumn(
                name: "Project_ProposalProposalId",
                table: "Projects",
                newName: "ProposalId1");

            migrationBuilder.RenameIndex(
                name: "IX_Projects_Project_ProposalProposalId",
                table: "Projects",
                newName: "IX_Projects_ProposalId1");

            migrationBuilder.CreateTable(
                name: "Proposals",
                columns: table => new
                {
                    ProposalId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    ProposalDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProposalTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proposals", x => x.ProposalId);
                    table.ForeignKey(
                        name: "FK_Proposals_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Proposals_UserId",
                table: "Proposals",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Proposals_ProposalId1",
                table: "Projects",
                column: "ProposalId1",
                principalTable: "Proposals",
                principalColumn: "ProposalId");
        }
    }
}
