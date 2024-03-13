package ma.disignMall.Controllers;

import ma.disignMall.Models.DTOs.ProjectDto;
import ma.disignMall.Models.Entities.Project;
import ma.disignMall.Services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{Id}")
    public Project getProjectById(@PathVariable Long Id) {
        return projectService.getProjectById(Id).orElse(null);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Project saveProject(@ModelAttribute ProjectDto Project) throws IOException {
        return projectService.saveProject(Project);
    }

    @DeleteMapping("/{Id}")
    public void deleteProject(@PathVariable Long Id) {
        projectService.deleteProject(Id);
    }
}
