using Microsoft.EntityFrameworkCore.Migrations;

namespace JudanApi.Migrations
{
    public partial class DropSelectedTrainerId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SelectedTrainerId",
                table: "Trainees");

            //migrationBuilder.AddColumn<int>(
            //    name: "TrainerId",
            //    table: "Trainees",
            //    type: "int",
            //    nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropColumn(
            //    name: "TrainerId",
            //    table: "Trainees");

            migrationBuilder.AddColumn<int>(
                name: "SelectedTrainerId",
                table: "Trainees",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
