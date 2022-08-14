//package com.ssafy.api.controller;
//
//import java.util.HashMap;
//import java.util.Map;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.ModelAndView;
//
//@RequestMapping("/file")
//public class FileController {
//	
//	@RequestMapping("mung/fileinsert")
//	public String fileinsert(HttpServletRequest request, @RequestPart MultipartFile files) throws Exception{
//		Files file = new Files();
//		
//		String sourceFileName = files.getOriginalFilename(); 
//	    		String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase(); 
//	    		File destinationFile; 
//	    		String destinationFileName;
//	    		String fileUrl = "D:/mung-1/src/main/resources/static/images/";
//		// mung-1은 자기 프로젝트이름으로 체인지!!
//	
//	    		do { 
//	        			destinationFileName = RandomStringUtils.randomAlphanumeric(32) + "." + sourceFileNameExtension; 
//	        			destinationFile = new File(fileUrl + destinationFileName); 
//	    		} while (destinationFile.exists()); 
//	    
//	    		destinationFile.getParentFile().mkdirs(); 
//	    		files.transferTo(destinationFile);
//	    
//	    		file.setFilename(destinationFileName);
//	    		file.setFileOriName(sourceFileName);
//	    		file.setFileurl(fileUrl);
//	    		filesService.save(file);
//			return "redirect:/mung/insert";
//	}
//	
//	@GetMapping(value = "/download")
//	public ModelAndView downloadFile(@RequestParam("sfolder") String sfolder, @RequestParam("ofile") String ofile,
//			@RequestParam("sfile") String sfile) {
//		
//		Map<String, Object> fileInfo = new HashMap<String, Object>();
//		fileInfo.put("sfolder", sfolder);
//		fileInfo.put("ofile", ofile);
//		fileInfo.put("sfile", sfile);
//
//		return new ModelAndView("fileDownLoadView", "downloadFile", fileInfo);	// view 이름, model 이름, Model(Object)
//	}
//}
