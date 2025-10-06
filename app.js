// Local Business Hub App JavaScript

// Demo data
const demoData = {
  business: {
    name: "Mike's Plumbing Services",
    industry: "Plumbing",
    location: "Denver, CO",
    phone: "(303) 555-0123",
    email: "info@mikesplumbing.com"
  },
  services: [
    { id: 1, name: "Emergency Repair", duration: 60, price: 150, description: "24/7 emergency plumbing repairs" },
    { id: 2, name: "Drain Cleaning", duration: 45, price: 120, description: "Professional drain cleaning service" },
    { id: 3, name: "Water Heater Installation", duration: 180, price: 450, description: "Complete water heater installation" }
  ],
  customers: [
    { id: 1, name: "Sarah Johnson", email: "sarah@email.com", phone: "(303) 555-0111", address: "123 Oak St, Denver, CO", status: "Active", lastContact: "2024-10-01", totalSpent: 285, notes: "Prefers morning appointments" },
    { id: 2, name: "Robert Chen", email: "robert@email.com", phone: "(303) 555-0222", status: "Lead", lastContact: "2024-09-28", source: "Google Search", notes: "Kitchen renovation project" },
    { id: 3, name: "Maria Rodriguez", email: "maria@email.com", phone: "(303) 555-0333", status: "Active", lastContact: "2024-09-25", totalSpent: 420, notes: "Regular maintenance customer" }
  ],
  bookings: [
    { id: 1, customer: "Sarah Johnson", service: "Drain Cleaning", date: "2024-10-15", time: "09:00", status: "Confirmed" },
    { id: 2, customer: "Robert Chen", service: "Emergency Repair", date: "2024-10-16", time: "14:00", status: "Pending" }
  ],
  reviews: [
    { id: 1, customer: "Sarah Johnson", rating: 5, text: "Excellent service! Mike was professional and fixed our drain quickly.", date: "2024-09-15", platform: "Google" },
    { id: 2, customer: "Maria Rodriguez", rating: 5, text: "Always reliable and fair pricing. Highly recommend!", date: "2024-09-10", platform: "Yelp" }
  ]
};

// App state
let currentView = 'home';
let currentCustomer = null;

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const views = document.querySelectorAll('.view');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initTabs();
  initModals();
  initWebsiteBuilder();
  initBookingSystem();
  initCRM();
  initMobileNav();
  
  // Set initial view based on hash or default to home
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    showView(hash);
  } else {
    showView('home');
  }
});

// Navigation functionality
function initNavigation() {
  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewName = link.getAttribute('data-view');
      if (viewName) {
        showView(viewName);
      }
    });
  });

  // Handle button clicks with data-view attribute
  document.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-view')) {
      e.preventDefault();
      const viewName = e.target.getAttribute('data-view');
      showView(viewName);
    }
  });

  // Handle module card clicks
  document.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const viewName = card.getAttribute('data-view');
      if (viewName) {
        showView(viewName);
      }
    });
  });
}

function showView(viewName) {
  // Hide all views
  views.forEach(view => view.classList.remove('active'));
  
  // Show target view
  const targetView = document.getElementById(viewName);
  if (targetView) {
    targetView.classList.add('active');
    currentView = viewName;
    
    // Update nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      }
    });
    
    // Update URL hash
    window.history.pushState({}, '', `#${viewName}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
}

// Tab functionality
function initTabs() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      const tabName = e.target.getAttribute('data-tab');
      const tabContainer = e.target.closest('section');
      
      if (tabContainer && tabName) {
        // Remove active class from all tabs in this container
        tabContainer.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        tabContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        e.target.classList.add('active');
        
        // Show corresponding content
        const tabContent = tabContainer.querySelector(`#${tabName}`);
        if (tabContent) {
          tabContent.classList.add('active');
        }
      }
    }
  });
}

// Modal functionality
function initModals() {
  const customerModal = document.getElementById('customerModal');
  const serviceModal = document.getElementById('serviceModal');
  const closeModalBtns = document.querySelectorAll('.modal-close');
  const addServiceBtn = document.getElementById('addServiceBtn');

  // Customer detail modal
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('customer-details-btn')) {
      const customerId = parseInt(e.target.getAttribute('data-customer'));
      const customer = demoData.customers.find(c => c.id === customerId);
      
      if (customer && customerModal) {
        showCustomerModal(customer);
      }
    }
  });

  // Add service modal
  if (addServiceBtn) {
    addServiceBtn.addEventListener('click', () => {
      if (serviceModal) {
        serviceModal.classList.remove('hidden');
      }
    });
  }

  // Close modals
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  });

  // Close modal on backdrop click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });

  // Handle service form submission
  const serviceForm = document.getElementById('serviceForm');
  if (serviceForm) {
    serviceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleServiceSubmission();
    });
  }

  // Cancel service form
  const cancelServiceBtn = document.getElementById('cancelService');
  if (cancelServiceBtn) {
    cancelServiceBtn.addEventListener('click', () => {
      serviceModal.classList.add('hidden');
      serviceForm.reset();
    });
  }
}

function showCustomerModal(customer) {
  const modal = document.getElementById('customerModal');
  const modalCustomerName = document.getElementById('modalCustomerName');
  const modalCustomerDetails = document.getElementById('modalCustomerDetails');

  if (modalCustomerName) {
    modalCustomerName.textContent = customer.name;
  }

  if (modalCustomerDetails) {
    modalCustomerDetails.innerHTML = `
      <div class="customer-detail-section">
        <h4>Contact Information</h4>
        <p><strong>Email:</strong> ${customer.email}</p>
        <p><strong>Phone:</strong> ${customer.phone}</p>
        ${customer.address ? `<p><strong>Address:</strong> ${customer.address}</p>` : ''}
      </div>
      
      <div class="customer-detail-section">
        <h4>Business Details</h4>
        <p><strong>Status:</strong> <span class="status status--${customer.status.toLowerCase() === 'active' ? 'success' : 'info'}">${customer.status}</span></p>
        <p><strong>Last Contact:</strong> ${formatDate(customer.lastContact)}</p>
        ${customer.totalSpent ? `<p><strong>Total Spent:</strong> $${customer.totalSpent}</p>` : ''}
        ${customer.source ? `<p><strong>Source:</strong> ${customer.source}</p>` : ''}
      </div>
      
      ${customer.notes ? `
        <div class="customer-detail-section">
          <h4>Notes</h4>
          <p>${customer.notes}</p>
        </div>
      ` : ''}
      
      <div class="customer-detail-section">
        <h4>Recent Activity</h4>
        <div class="activity-list">
          <div class="activity-item">
            <span class="activity-date">${formatDate(customer.lastContact)}</span>
            <span class="activity-description">Last service appointment</span>
          </div>
        </div>
      </div>
    `;
  }

  modal.classList.remove('hidden');
}

function handleServiceSubmission() {
  const form = document.getElementById('serviceForm');
  const formData = new FormData(form);
  
  const newService = {
    id: demoData.services.length + 1,
    name: document.getElementById('serviceName').value,
    duration: parseInt(document.getElementById('serviceDuration').value),
    price: parseInt(document.getElementById('servicePrice').value),
    description: document.getElementById('serviceDescription').value
  };

  // Add to demo data
  demoData.services.push(newService);
  
  // Close modal and reset form
  document.getElementById('serviceModal').classList.add('hidden');
  form.reset();
  
  // Refresh services list if we're on the booking page
  if (currentView === 'booking') {
    updateServicesDisplay();
  }
  
  // Show success message
  showNotification('Service added successfully!', 'success');
}

// Website Builder functionality
function initWebsiteBuilder() {
  const businessNameInput = document.getElementById('businessName');
  const primaryColorInput = document.getElementById('primaryColor');
  const businessPhoneInput = document.getElementById('businessPhone');
  const previewBusinessName = document.getElementById('previewBusinessName');
  const previewPhone = document.getElementById('previewPhone');
  const templateCards = document.querySelectorAll('.template-card');

  // Live preview updates
  if (businessNameInput && previewBusinessName) {
    businessNameInput.addEventListener('input', (e) => {
      previewBusinessName.textContent = e.target.value || 'Your Business Name';
    });
  }

  if (businessPhoneInput && previewPhone) {
    businessPhoneInput.addEventListener('input', (e) => {
      previewPhone.textContent = e.target.value || 'Your Phone Number';
    });
  }

  if (primaryColorInput) {
    primaryColorInput.addEventListener('change', (e) => {
      updatePreviewColor(e.target.value);
    });
  }

  // Template selection
  templateCards.forEach(card => {
    card.addEventListener('click', () => {
      templateCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      
      const template = card.getAttribute('data-template');
      updatePreviewTemplate(template);
    });
  });
}

function updatePreviewColor(color) {
  const previewSite = document.querySelector('.preview-site');
  if (previewSite) {
    previewSite.style.setProperty('--preview-color', color);
  }
}

function updatePreviewTemplate(template) {
  const previewSite = document.querySelector('.preview-site');
  if (previewSite) {
    // Update template-specific content
    const templateData = {
      plumber: {
        subtitle: 'Professional Plumbing Services in Denver, CO',
        services: ['Emergency Repairs', 'Drain Cleaning', 'Water Heater Installation']
      },
      salon: {
        subtitle: 'Premium Hair & Beauty Services',
        services: ['Haircuts & Styling', 'Color & Highlights', 'Manicures & Pedicures']
      },
      landscaper: {
        subtitle: 'Complete Landscaping & Lawn Care',
        services: ['Lawn Maintenance', 'Garden Design', 'Tree Trimming']
      },
      bakery: {
        subtitle: 'Fresh Baked Goods Daily',
        services: ['Custom Cakes', 'Fresh Bread', 'Pastries & Cookies']
      }
    };

    const data = templateData[template];
    if (data) {
      const subtitle = previewSite.querySelector('.preview-header-section p');
      const serviceItems = previewSite.querySelectorAll('.service-item');
      
      if (subtitle) {
        subtitle.textContent = data.subtitle;
      }
      
      serviceItems.forEach((item, index) => {
        if (data.services[index]) {
          item.textContent = data.services[index];
        }
      });
    }
  }
}

// Booking System functionality
function initBookingSystem() {
  // Calendar navigation would go here
  // For demo purposes, we'll just show static data
}

function updateServicesDisplay() {
  const servicesList = document.querySelector('.services-list');
  if (servicesList) {
    servicesList.innerHTML = '';
    
    demoData.services.forEach(service => {
      const serviceCard = createServiceCard(service);
      servicesList.appendChild(serviceCard);
    });
  }
}

function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.innerHTML = `
    <h4>${service.name}</h4>
    <p>${service.description}</p>
    <div class="service-details">
      <span>${service.duration} min • $${service.price}</span>
      <button class="btn btn--sm btn--outline">Edit</button>
    </div>
  `;
  return card;
}

// CRM functionality
function initCRM() {
  const customerSearch = document.getElementById('customerSearch');
  
  if (customerSearch) {
    customerSearch.addEventListener('input', (e) => {
      filterCustomers(e.target.value);
    });
  }
}

function filterCustomers(searchTerm) {
  const customerCards = document.querySelectorAll('.customer-card');
  
  customerCards.forEach(card => {
    const customerName = card.querySelector('h4').textContent.toLowerCase();
    const customerEmail = card.querySelector('p').textContent.toLowerCase();
    
    if (customerName.includes(searchTerm.toLowerCase()) || 
        customerEmail.includes(searchTerm.toLowerCase())) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Mobile navigation
function initMobileNav() {
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification-close">&times;</button>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    padding: var(--space-12) var(--space-16);
    box-shadow: var(--shadow-lg);
    z-index: 3000;
    display: flex;
    align-items: center;
    gap: var(--space-12);
    min-width: 300px;
    animation: slideIn 0.3s ease-out;
  `;

  // Add type-specific styles
  if (type === 'success') {
    notification.style.borderColor = 'var(--color-success)';
    notification.style.backgroundColor = 'rgba(var(--color-success-rgb), 0.1)';
  } else if (type === 'error') {
    notification.style.borderColor = 'var(--color-error)';
    notification.style.backgroundColor = 'rgba(var(--color-error-rgb), 0.1)';
  }
  
  // Add close functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.style.cssText = `
    background: none;
    border: none;
    font-size: var(--font-size-lg);
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0;
  `;
  
  closeBtn.addEventListener('click', () => {
    notification.remove();
  });
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Add slide-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .customer-detail-section {
    margin-bottom: var(--space-20);
    padding-bottom: var(--space-16);
    border-bottom: 1px solid var(--color-border);
  }
  
  .customer-detail-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .customer-detail-section h4 {
    margin-bottom: var(--space-12);
    color: var(--color-text);
    font-size: var(--font-size-md);
  }
  
  .customer-detail-section p {
    margin-bottom: var(--space-8);
    color: var(--color-text-secondary);
  }
  
  .customer-detail-section p strong {
    color: var(--color-text);
  }
  
  .activity-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }
  
  .activity-item {
    display: flex;
    justify-content: space-between;
    padding: var(--space-8);
    background: var(--color-background);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
  }
  
  .activity-date {
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-medium);
  }
  
  .activity-description {
    color: var(--color-text);
  }
  
  @media (max-width: 768px) {
    .nav-menu.active {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--color-surface);
      flex-direction: column;
      padding: var(--space-16);
      border-top: 1px solid var(--color-border);
      box-shadow: var(--shadow-md);
    }
  }
`;
document.head.appendChild(style);

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    showView(hash);
  } else {
    showView('home');
  }
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Initialize pricing interactions
document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Start Free Trial') {
    e.preventDefault();
    showNotification('Free trial started! Welcome to Local Business Hub!', 'success');
  }
});

// Demo interactions for better UX
document.addEventListener('click', (e) => {
  // Handle publish button in website builder
  if (e.target.textContent === 'Publish') {
    e.preventDefault();
    showNotification('Website published successfully!', 'success');
  }
  
  // Handle edit buttons in services
  if (e.target.textContent === 'Edit' && e.target.closest('.service-card')) {
    e.preventDefault();
    showNotification('Service editing feature coming soon!', 'info');
  }
  
  // Handle template responses
  if (e.target.textContent === 'Edit' && e.target.closest('.template-item')) {
    e.preventDefault();
    showNotification('Template editing opened!', 'info');
  }
});

// Add loading states for better UX
function showLoadingState(element) {
  const originalContent = element.innerHTML;
  element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
  element.disabled = true;
  
  setTimeout(() => {
    element.innerHTML = originalContent;
    element.disabled = false;
  }, 1000);
}

// Enhanced button interactions
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn') && 
      (e.target.textContent.includes('Add') || 
       e.target.textContent.includes('Save') || 
       e.target.textContent.includes('Update'))) {
    showLoadingState(e.target);
  }
});

console.log('Local Business Hub app initialized successfully!');