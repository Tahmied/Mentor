import Headings from '../Utilis/Headings';
import './courses.css';
const Courses = () => {
    return (
        <section className="courses">
            <Headings sectionName={'Popular Courses'} Title={'Top Class Courses'} Desc={'Discover Courses Trusted By Thousands of Learners Worldwide'}></Headings>
            <div className="courses-container">
               
                <div className="course-item">
                    <div className="course-thumbnail">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" alt="WordPress Development"/>
                    </div>
                    <div className="course-content">
                        <span className="course-category">WordPress Development</span>
                        <h3 className="course-title">Complete WordPress Theme Development</h3>
                        <div className="course-meta">
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Lessons 7</span>
                            </div>
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span>Students 4</span>
                            </div>
                        </div>
                        <div className="instructor-info">
                            <div className="instructor-avatar">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Mohiuddin Sumon"/>
                            </div>
                            <div className="instructor-details">
                                <div className="instructor-name">Mohiuddin Sumon</div>
                                <div className="instructor-title">WordPress Developer</div>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <span className="rating-text">(5.00)</span>
                        </div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price">$99.00</div>
                        <button className="view-details">View Details</button>
                    </div>
                </div>

           
                <div className="course-item">
                    <div className="course-thumbnail">
                        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop" alt="Web Design"/>
                    </div>
                    <div className="course-content">
                        <span className="course-category">Web Design</span>
                        <h3 className="course-title">Mastering Webflow: Build Stunning Websites Without</h3>
                        <div className="course-meta">
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Lessons 14</span>
                            </div>
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span>Students 0</span>
                            </div>
                        </div>
                        <div className="instructor-info">
                            <div className="instructor-avatar">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Mohiuddin Sumon"/>
                            </div>
                            <div className="instructor-details">
                                <div className="instructor-name">Mohiuddin Sumon</div>
                                <div className="instructor-title">WordPress Developer</div>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                            </div>
                            <span className="rating-text">(0)</span>
                        </div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price price-free">Free</div>
                        <button className="view-details">View Details</button>
                    </div>
                </div>

                <div className="course-item">
                    <div className="course-thumbnail">
                        <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop" alt="Video Editing"/>
                    </div>
                    <div className="course-content">
                        <span className="course-category">Video Editing</span>
                        <h3 className="course-title">Adobe Premiere Pro MasterclassName: Video Editing</h3>
                        <div className="course-meta">
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Lessons 9</span>
                            </div>
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span>Students 0</span>
                            </div>
                        </div>
                        <div className="instructor-info">
                            <div className="instructor-avatar">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Mohiuddin Sumon"/>
                            </div>
                            <div className="instructor-details">
                                <div className="instructor-name">Mohiuddin Sumon</div>
                                <div className="instructor-title">WordPress Developer</div>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                                <span className="star empty">★</span>
                            </div>
                            <span className="rating-text">(0)</span>
                        </div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price price-free">Free</div>
                        <button className="view-details">View Details</button>
                    </div>
                </div>

                <div className="course-item">
                    <div className="course-thumbnail">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop" alt="JavaScript"/>
                    </div>
                    <div className="course-content">
                        <span className="course-category">Development</span>
                        <h3 className="course-title">Modern JavaScript: From Beginner to Advanced</h3>
                        <div className="course-meta">
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Lessons 25</span>
                            </div>
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span>Students 12</span>
                            </div>
                        </div>
                        <div className="instructor-info">
                            <div className="instructor-avatar">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Mohiuddin Sumon"/>
                            </div>
                            <div className="instructor-details">
                                <div className="instructor-name">Mohiuddin Sumon</div>
                                <div className="instructor-title">WordPress Developer</div>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star empty">★</span>
                            </div>
                            <span className="rating-text">(4.50)</span>
                        </div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price">$79.00</div>
                        <button className="view-details">View Details</button>
                    </div>
                </div>

                <div className="course-item">
                    <div className="course-thumbnail">
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" alt="UI Design"/>
                    </div>
                    <div className="course-content">
                        <span className="course-category">Design</span>
                        <h3 className="course-title">UI/UX Design Fundamentals with Figma</h3>
                        <div className="course-meta">
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Lessons 18</span>
                            </div>
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span>Students 8</span>
                            </div>
                        </div>
                        <div className="instructor-info">
                            <div className="instructor-avatar">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Mohiuddin Sumon"/>
                            </div>
                            <div className="instructor-details">
                                <div className="instructor-name">Mohiuddin Sumon</div>
                                <div className="instructor-title">WordPress Developer</div>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <span className="rating-text">(4.80)</span>
                        </div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price">$89.00</div>
                        <button className="view-details">View Details</button>
                    </div>
                </div>

                <div className="course-item">
                    <div className="course-thumbnail">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Marketing"/>
                    </div>
                    <div className="course-content">
                        <span className="course-category">Marketing</span>
                        <h3 className="course-title">Digital Marketing Strategy: Social Media to SEO</h3>
                        <div className="course-meta">
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Lessons 22</span>
                            </div>
                            <div className="meta-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span>Students 15</span>
                            </div>
                        </div>
                        <div className="instructor-info">
                            <div className="instructor-avatar">
                                <img src="https://i.pravatar.cc/100?img=12" alt="Mohiuddin Sumon"/>
                            </div>
                            <div className="instructor-details">
                                <div className="instructor-name">Mohiuddin Sumon</div>
                                <div className="instructor-title">WordPress Developer</div>
                            </div>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <span className="rating-text">(4.90)</span>
                        </div>
                    </div>
                    <div className="course-footer">
                        <div className="course-price price-free">Free</div>
                        <button className="view-details">View Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;