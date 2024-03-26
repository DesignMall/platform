package ma.disignMall.Services;

import ma.disignMall.Models.DTOs.TeamsDto;
import ma.disignMall.Models.Entities.Teams;
import ma.disignMall.Models.Mappers.TeamsMapper;
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

    public Optional<Teams> getTeamById(Long teamId) {
        return teamsRepository.findById(teamId);
    }

    public Teams saveTeam(TeamsDto teamsDto) {
        Teams team = new Teams(teamsDto.getName(), teamsDto.getCategory());
        return teamsRepository.save(team);
    }

    public void deleteTeam(Long teamId) {
        teamsRepository.deleteById(teamId);
    }
}

