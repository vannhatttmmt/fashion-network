package application.controller.api;

import application.constant.Constant;
import application.model.FileUploadResult;
import application.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
public class UploadApiController {

    @Autowired
    FileStorageService storageService;

    @PostMapping("/upload-image")
    public FileUploadResult uploadImage(@RequestParam("file") MultipartFile file) {
        String message = "";
        FileUploadResult result = new FileUploadResult();
        try {
            String newFileName = storageService.store(file);
            message = "You successfully upload " + file.getOriginalFilename() + "!";
            result.setMessage(message);
            result.setSuccess(true);
            result.setLink(Constant.PREFIX_LINK_UPLOAD + newFileName);
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage(e.getMessage());
        }
        return result;
    }
}
