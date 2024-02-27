package ma.disignMall.Controllers;

import ma.disignMall.Models.Entities.Teams;
import ma.disignMall.Services.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teams")
public class TeamsController {
    @Autowired
    private TeamsService teamsService;

    @GetMapping
    public List<Teams> getAllTeams() {
        return teamsService.getAllTeams();
    }

    @GetMapping("/{teamId}")
    public Teams getTeamById(@PathVariable String teamId) {
        return teamsService.getTeamById(teamId).orElse(null);
    }

    @PostMapping
    public Teams saveTeam(@RequestBody Teams team) {
        return teamsService.saveTeam(team);
    }

    @DeleteMapping("/{teamId}")
    public void deleteTeam(@PathVariable String teamId) {
        teamsService.deleteTeam(teamId);
    }
}
