import { jsPDF } from 'jspdf';
import { personalInfo, socialLinks, experience, education, skills, projects } from '../data/projects';

export const generateCV = () => {
  // Create a new PDF document, A4 size
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const marginLeft = 20;
  const marginTop = 20;
  const contentWidth = pageWidth - marginLeft * 2;
  
  let currentY = marginTop;

  // Helper method for word wrapper and adding text with auto-line break
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number, style = 'normal', color = '#000000') => {
    doc.setFont('helvetica', style);
    doc.setFontSize(fontSize);
    doc.setTextColor(color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.45); // approximate height added
  };

  const addHeading = (text: string) => {
    currentY += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor('#111111');
    doc.text(text.toUpperCase(), marginLeft, currentY);
    
    // Line under heading
    currentY += 2;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(marginLeft, currentY, pageWidth - marginLeft, currentY);
    currentY += 6;
  };

  // ----- HEADER -----
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor('#000000');
  doc.text(personalInfo.name.toUpperCase(), pageWidth / 2, currentY, { align: 'center' });
  currentY += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor('#333333');
  
  const contactsLine1 = [
    personalInfo.phone,
    socialLinks.email,
    personalInfo.location
  ].join('  |  ');

  const contactsLine2 = [
    socialLinks.linkedin.replace('https://www.', ''),
    socialLinks.github.replace('https://', '')
  ].join('  |  ');
  
  doc.text(contactsLine1, pageWidth / 2, currentY, { align: 'center' });
  currentY += 5;
  doc.text(contactsLine2, pageWidth / 2, currentY, { align: 'center' });
  currentY += 8;

  // ----- SUMMARY -----
  addHeading('Professional Summary');
  currentY += addWrappedText(personalInfo.bio, marginLeft, currentY, contentWidth, 10, 'normal', '#333333');
  currentY += 4;

  // ----- SKILLS -----
  addHeading('Skills');
  const frontendSkills = skills.filter((s) => s.category === 'frontend').map((s) => s.name).join(', ');
  const backendSkills = skills.filter((s) => s.category === 'backend').map((s) => s.name).join(', ');
  const toolsSkills = skills.filter((s) => s.category === 'tools').map((s) => s.name).join(', ');
  
  currentY += addWrappedText(`Frontend: ${frontendSkills}`, marginLeft, currentY, contentWidth, 10);
  currentY += 2;
  currentY += addWrappedText(`Backend: ${backendSkills}`, marginLeft, currentY, contentWidth, 10);
  currentY += 2;
  currentY += addWrappedText(`Tools & Others: ${toolsSkills}`, marginLeft, currentY, contentWidth, 10);
  currentY += 4;

  // ----- WORK EXPERIENCE -----
  addHeading('Experience');
  experience.forEach((exp) => {
    // Role and Company
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(exp.role, marginLeft, currentY);
    
    // Period right aligned
    doc.setFont('helvetica', 'normal');
    doc.text(exp.period, pageWidth - marginLeft, currentY, { align: 'right' });
    currentY += 5;

    // Company
    doc.setFont('helvetica', 'italic');
    doc.text(exp.company, marginLeft, currentY);
    currentY += 5;

    // Desc
    currentY += addWrappedText(`• ${exp.description}`, marginLeft + 5, currentY, contentWidth - 5, 10);
    currentY += 4;
  });

  // ----- PROJECTS -----
  // Page break check helper
  const checkPageBreak = (neededHeight: number) => {
    if (currentY + neededHeight > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      currentY = 20;
    }
  };

  addHeading('Projects');
  projects.filter(p => p.featured).forEach((project) => {
    checkPageBreak(25); // Check if enough space

    // Title & Tech
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor('#000000');
    doc.text(project.title, marginLeft, currentY);
    
    // Tech Stack list right aligned if short enough
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor('#555555');
    const techText = `[ ${project.tech.join(', ')} ]`;
    doc.text(techText, pageWidth - marginLeft, currentY, { align: 'right' });
    currentY += 5;

    // Long Description
    currentY += addWrappedText(`• ${project.longDescription || project.description}`, marginLeft + 5, currentY, contentWidth - 5, 10, 'normal', '#333333');
    currentY += 4;
  });

  // ----- EDUCATION -----
  checkPageBreak(30);
  addHeading('Education');
  education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(edu.school, marginLeft, currentY);

    doc.setFont('helvetica', 'normal');
    doc.text(edu.period, pageWidth - marginLeft, currentY, { align: 'right' });
    currentY += 5;

    doc.setFont('helvetica', 'italic');
    doc.text(edu.degree, marginLeft, currentY);
    currentY += 5;

    if (edu.description) {
      currentY += addWrappedText(`• ${edu.description}`, marginLeft + 5, currentY, contentWidth - 5, 10);
    }
    currentY += 4;
  });

  // Download the PDF
  doc.save(`${personalInfo.name.replace(' ', '_')}_CV_ATS.pdf`);
};
