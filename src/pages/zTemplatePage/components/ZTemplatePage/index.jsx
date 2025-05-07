import { useState, useEffect } from 'react';
import { ReactComponent as ThemeBg } from '../../../../assets/images/svg/theme1.svg';
import emailjs from '@emailjs/browser';

export default function ZTempaltePage() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    issues: ''
  });
  const [errors, setErrors] = useState({
    patientName: '',
    patientEmail: '',
    issues: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("eUObe5J5bzvuuAR1c");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { patientName: '', patientEmail: '', issues: '' };
    
    // Validate name
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
      isValid = false;
    }
    
    // Validate email
    if (!formData.patientEmail.trim()) {
      newErrors.patientEmail = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.patientEmail)) {
      newErrors.patientEmail = 'Please enter a valid email address';
      isValid = false;
    }
    
    // Validate issues
    if (!formData.issues.trim()) {
      newErrors.issues = 'Please describe your issues';
      isValid = false;
    } else if (formData.issues.trim().length < 10) {
      newErrors.issues = 'Please provide more details (at least 10 characters)';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare template parameters
    const templateParams = {
      to_email: "prem24052000@gmail.com",
      from_name: formData.patientName,
      from_email: formData.patientEmail,
      message: formData.issues,
      reply_to: formData.patientEmail
    };

    // Send email using EmailJS
    emailjs.send(
      'service_3wyln5n',  // Replace with your EmailJS service ID
      'template_w7onju7', // Replace with your EmailJS template ID
      templateParams,
      'eUObe5J5bzvuuAR1c'   // Also pass your public key here
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Clear form after successful submission
      setFormData({
        patientName: '',
        patientEmail: '',
        issues: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus("error");
      setIsSubmitting(false);
    });
  };

  return (
    <div className="flex items-center w-full justify-between min-h-screen">
 {/* Desktop Image */}
 <ThemeBg className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0" />
   
      
      {/* <div className="relative w-full flex flex-col items-center px-4 md:px-0"> */}
        {/* Content area - adjusted for responsiveness */}
        <div className="w-full  max-w-md md:max-w-none md:w-1/3  md:ml-auto md:mr-8 lg:mr-40 mt-8 md:mt-0 z-10  mx-4">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Know Your Privacy Rights</h2>
            
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-5 w-5 rounded-full bg-pink-600 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-sm md:text-base text-gray-700">Right to Information Access Privacy Policy</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-5 w-5 rounded-full bg-pink-600 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-sm md:text-base text-gray-700">Right to Correction and Erasure</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-5 w-5 rounded-full bg-pink-600 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-sm md:text-base text-gray-700">Right to Grievance Redressal</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1">
                  <div className="h-5 w-5 rounded-full bg-pink-600 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-sm md:text-base text-gray-700">Right to Nominate</span>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
              If there are any grievance with respect to above rights kindly mention at:
            </p>
            
            {submitStatus === "success" ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 md:px-4 md:py-3 rounded mb-4 md:mb-6 text-sm md:text-base">
                <p>Thank you! Your information has been submitted successfully.</p>
              </div>
            ) : submitStatus === "error" ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 md:px-4 md:py-3 rounded mb-4 md:mb-6 text-sm md:text-base">
                <p>There was an error submitting your information. Please try again later.</p>
              </div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="patientName" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.patientName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-sm md:text-base`}
                    placeholder="Enter"
                  />
                  {errors.patientName && (
                    <p className="mt-1 text-xs text-red-600">{errors.patientName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="patientEmail" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Patient email Id
                  </label>
                  <input
                    type="email"
                    id="patientEmail"
                    name="patientEmail"
                    value={formData.patientEmail}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.patientEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-sm md:text-base`}
                    placeholder="Enter"
                  />
                  {errors.patientEmail && (
                    <p className="mt-1 text-xs text-red-600">{errors.patientEmail}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="issues" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Issues
                  </label>
                  <textarea
                    id="issues"
                    name="issues"
                    value={formData.issues}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-3 py-2 border ${errors.issues ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-sm md:text-base`}
                    placeholder="Please Enter your issues..."
                  />
                  {errors.issues && (
                    <p className="mt-1 text-xs text-red-600">{errors.issues}</p>
                  )}
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-pink-800 hover:bg-pink-900 text-white font-medium py-2 md:py-3 px-4 rounded-md transition duration-150 ease-in-out text-sm md:text-base mt-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            )}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}