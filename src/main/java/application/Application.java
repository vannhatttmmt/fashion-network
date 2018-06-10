package application;

import application.service.FileStorageService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.Resource;

@SpringBootApplication
public class Application implements CommandLineRunner {
    private static final Logger logger = LogManager.getLogger(Application.class);

    @Resource
    FileStorageService storageService;
    public static void main(String[] args) {
        logger.debug("Start main -------------");
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... arg) throws Exception{
//        storageService.deleteAll();
//        storageService.init();
    }

}
