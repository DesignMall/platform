package ma.disignMall.Services;

import ma.disignMall.Models.DTOs.AdminDto;
import ma.disignMall.Models.Entities.Admin;
import ma.disignMall.Models.Enums.State;
import ma.disignMall.Models.Mappers.AdminMapper;
import ma.disignMall.Repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;

@Service
public class AdminService {

    AdminRepository  adminRepository;
    AdminMapper adminMapper;

    @Autowired
    public AdminService(AdminRepository adminRepository,AdminMapper  adminMapper) {
        this.adminRepository = adminRepository;
        this.adminMapper = adminMapper;
    }
    public List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }

    public Admin createAdmin(AdminDto adminDto){
        return adminRepository.save(adminMapper.toEntity(adminDto));
    }

    public Admin getAdminById(Long id){
        return adminRepository.findById(id).orElse(null);
    }
}
