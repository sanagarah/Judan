using Microsoft.EntityFrameworkCore.Migrations;

namespace JudanApi.Migrations
{
    public partial class DropPasword : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropColumn(
            //    name: "Password",
            //    table: "Trainers");

            //migrationBuilder.DropColumn(
            //    name: "Password",
            //    table: "Trainees");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Trainers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Trainees",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
