package ma.disignMall.Services;

import ma.disignMall.Models.DTOs.ProjectDto;
import ma.disignMall.Models.Entities.Customer;
import ma.disignMall.Models.Entities.Files;
import ma.disignMall.Models.Entities.Project;
import ma.disignMall.Models.Mappers.ProjectMapper;
import ma.disignMall.Repositories.CustomerRepository;
import ma.disignMall.Repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final FileService fileService;
    private final ProjectMapper projectMapper;
    private final CustomerRepository customerRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository, FileService fileService, ProjectMapper projectMapper, CustomerRepository customerRepository){
        this.projectRepository = projectRepository;
        this.fileService = fileService;
        this.projectMapper = projectMapper;
        this.customerRepository = customerRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long Id) {
        return projectRepository.findById(Id);
    }

    public Project saveProject(ProjectDto projectDto) throws IOException {
        Project project = projectMapper.toEntity(projectDto);
        Customer customer = customerRepository.findById(projectDto.getCostumerId()).orElse(null);
        Files file = fileService.storeDataIntoFileSystem(projectDto.getFile());
        project.setFile(file);
        project.setCustomer(customer);
        return projectRepository.save(project);
    }

    public void deleteProject(Long Id) {
        projectRepository.deleteById(Id);
    }
}
