import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Job Posted:', jobData);
    // Redirect to home page after posting
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <Input
            type="text"
            id="title"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <Input
            type="text"
            id="company"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <Input
            type="text"
            id="location"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <Textarea
            id="description"
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>
        <Button type="submit" className="w-full">Post Job</Button>
      </form>
    </div>
  );
};

export default PostJob;
