package ma.disignMall.Controllers;

import ma.disignMall.Models.DTOs.TeamsDto;
import ma.disignMall.Models.Entities.Teams;
import ma.disignMall.Services.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teams")
public class TeamsController {
    @Autowired
    private TeamsService teamsService;

    @GetMapping
    public ResponseEntity<List<Teams>> getAllTeams() {
        List<Teams> teams = teamsService.getAllTeams();
        return ResponseEntity.ok(teams);
    }

    @GetMapping("/{teamId}")
    public Teams getTeamById(@PathVariable Long teamId) {
        return teamsService.getTeamById(teamId).orElse(null);
    }

    @PostMapping
    public Teams saveTeam(@RequestBody TeamsDto teamsDto) {
        return teamsService.saveTeam(teamsDto);
    }

    @DeleteMapping("/{teamId}")
    public void deleteTeam(@PathVariable Long teamId) {
        teamsService.deleteTeam(teamId);
    }
}
