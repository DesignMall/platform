package ma.disignMall.Services;

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
    public void logout(Long id) {
        Admin admin = adminRepository.findById(id).orElse(null);
        assert admin != null;
        admin.setState(State.OFFLINE);
        adminRepository.save(admin);
    }
    public List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }

    public Admin getAdminById(Long id){
        return adminRepository.findById(id).orElse(null);
    }
}
