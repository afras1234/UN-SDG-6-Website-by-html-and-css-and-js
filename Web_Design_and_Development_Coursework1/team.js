document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.querySelector('.details').style.transform = 'translateY(0)';
        });
        
        member.addEventListener('mouseleave', () => {
            member.querySelector('.details').style.transform = 'translateY(100%)';
        });
    });
});
