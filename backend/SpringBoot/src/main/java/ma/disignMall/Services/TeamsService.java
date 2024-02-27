package ma.disignMall.Services;

import ma.disignMall.Models.Entities.Teams;
import ma.disignMall.Repositories.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamsService {
    @Autowired
    private TeamsRepository teamsRepository;

    public List<Teams> getAllTeams() {
        return teamsRepository.findAll();
    }

    public Optional<Teams> getTeamById(String teamId) {
        return teamsRepository.findById(teamId);
    }

    public Teams saveTeam(Teams team) {
        return teamsRepository.save(team);
    }

    public void deleteTeam(String teamId) {
        teamsRepository.deleteById(teamId);
    }
}

