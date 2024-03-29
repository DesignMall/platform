package ma.disignMall.Controllers;

import ma.disignMall.Models.DTOs.AdminDto;
import ma.disignMall.Models.Entities.Admin;
import ma.disignMall.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    AdminService  adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public ResponseEntity<List<Admin>> getAllAdmin(){
        List<Admin> Admins = adminService.getAllAdmins();
        return ResponseEntity.ok(Admins);
    }

    @PostMapping
    public ResponseEntity<Admin> createAdmin(@RequestBody AdminDto adminDto){
        Admin admin = adminService.createAdmin(adminDto);
        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable("id") Long id) {
         Admin admin = adminService.getAdminById(id);
        return ResponseEntity.ok(admin);
    }

}
