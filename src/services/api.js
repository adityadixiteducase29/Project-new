// API Base Configuration
const API_BASE_URL = 'http://localhost:3000/api';

// API Service Class
class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.token = null; // Will be set from Redux
    }

    // Set authentication token (called from Redux)
    setToken(token) {
        this.token = token;
    }

    // Clear authentication token
    clearToken() {
        this.token = null;
    }

    // Get authentication headers
    getAuthHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': this.token ? `Bearer ${this.token}` : ''
        };
    }

    // Generic API request method
    async request(endpoint, options = {}) {
        try {
            const url = `${this.baseURL}${endpoint}`;
            
            // Prepare headers
            const headers = this.getAuthHeaders();
            
            // If we have a body and it's FormData, don't set Content-Type
            // If it's not FormData, set Content-Type to application/json
            if (options.body && options.body instanceof FormData) {
                delete headers['Content-Type']; // Let browser set it for FormData
            }
            
            const config = {
                headers,
                ...options
            };

            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                // Create a more detailed error
                const error = new Error(data.message || `HTTP error! status: ${response.status}`);
                error.status = response.status;
                error.data = data;
                throw error;
            }

            return data;
        } catch (error) {
            console.error('API Request Error:', error);
            
            // If it's a network error (no response)
            if (!error.status) {
                error.message = 'Network error. Please check your connection.';
                error.status = 0;
            }
            
            throw error;
        }
    }

    // Convert object to FormData (for future file uploads)
    objectToFormData(obj) {
        const formData = new FormData();
        Object.keys(obj).forEach(key => {
            if (obj[key] !== null && obj[key] !== undefined) {
                formData.append(key, obj[key]);
            }
        });
        return formData;
    }

    // Authentication Methods - Using JSON for better compatibility
    async login(email, password) {
        try {
            const response = await this.request('/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });

            // Note: Token will be set by Redux, not here
            return response;
        } catch (error) {
            // Return a structured error response
            return {
                success: false,
                message: error.message || 'Login failed',
                error: error
            };
        }
    }

    async register(userData) {
        try {
            const response = await this.request('/users/register', {
                method: 'POST',
                body: JSON.stringify(userData)
            });

            // Note: Token will be set by Redux, not here
            return response;
        } catch (error) {
            // Return a structured error response
            return {
                success: false,
                message: error.message || 'Registration failed',
                error: error
            };
        }
    }

    async logout() {
        this.clearToken();
        return { success: true, message: 'Logged out successfully' };
    }

    // User Profile Methods
    async getProfile() {
        try {
            return await this.request('/users/profile');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch profile',
                error: error
            };
        }
    }

    async updateProfile(profileData) {
        try {
            const response = await this.request('/users/profile', {
                method: 'PUT',
                body: JSON.stringify(profileData)
            });

            return response;
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Profile update failed',
                error: error
            };
        }
    }

    async changePassword(currentPassword, newPassword) {
        try {
            const response = await this.request('/users/change-password', {
                method: 'PUT',
                body: JSON.stringify({ currentPassword, newPassword })
            });

            return response;
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Password change failed',
                error: error
            };
        }
    }

    // Dashboard Methods
    async getDashboardData() {
        try {
            return await this.request('/users/dashboard');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch dashboard data',
                error: error
            };
        }
    }

    // Admin Methods
    async getAllUsers() {
        try {
            return await this.request('/users/all');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch users',
                error: error
            };
        }
    }

    async getVerifiersWithAssignments() {
        try {
            return await this.request('/users/verifiers-with-assignments');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch verifiers',
                error: error
            };
        }
    }

    async getUserStats() {
        try {
            return await this.request('/users/stats');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch user stats',
                error: error
            };
        }
    }

    // Verifier Methods
    async getVerifierApplications() {
        try {
            return await this.request('/users/verifier/applications');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch verifier applications',
                error: error
            };
        }
    }

    async getVerifierCompanies() {
        try {
            return await this.request('/users/verifier/companies');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch verifier companies',
                error: error
            };
        }
    }

    // Company Methods (Future)
    async getCompanyApplications() {
        try {
            return await this.request('/users/company/applications');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch company applications',
                error: error
            };
        }
    }

    async getCompanyStats() {
        try {
            return await this.request('/users/company/stats');
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to fetch company stats',
                error: error
            };
        }
    }

    // Health Check
    async healthCheck() {
        try {
            const response = await fetch('http://localhost:3000/health');
            return response.ok;
        } catch (error) {
            return false;
        }
    }
}

// Create and export singleton instance
const apiService = new ApiService();
export default apiService;
