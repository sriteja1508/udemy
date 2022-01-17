const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Ruchitha',
    position: 'software developer',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "An effective job title wiil typically include a general term, the level of experience and any special requirements. The general term will optimize your job title to show up in a general search for jobs of the same nature. The level of experience will help you attract the most qualified applicants by outlining the amount of responsibility and prior knowledge required.",
  },
  {
    name: 'shalini',
    position: 'CA',
    photo: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/201212/manishlathgupta505_121712030321.jpg',
    text:
      'A good job description starts with an attention-grabbing summary of the position and its role within your company. Your summary should provide an overview of your company and expectations for the position. Outline the types of activities and responsibilities required for the job so job seekers can determine if they are qualified, or if the job is suitable for them.',
  },
  {
    name: 'Roshini',
    position: 'Manager',
    photo: 'https://www.workingmother.com/sites/workingmother.com/files/styles/500_1x_/public/images/2016/11/istock_4407788_large.jpg?itok=tyfH04T6&fc=50,50',
    text:
      "Managers are most often responsible for a particular function or department within the organization. From accounting to marketing, to sales, customer support, engineering, quality, and all other groups, a manager either directly leads his or her team or leads a group of supervisors who oversee the teams of employees. ",
  },
  {
    name: 'Shilpa',
    position: 'Backend Developer',
    photo: 'https://media.gettyimages.com/photos/business-woman-at-office-stock-photo-picture-id1312451386?s=2048x2048',
    text:
      "Assessing the efficiency and speed of current applications.Writing high-quality code. Managing hosting environments.QA testing.Troubleshooting and debugging. Keeping on top of new technologies."
  }
 
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
