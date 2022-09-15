const lngs = {
    en: { nativeName: 'EN' },
    vi: { nativeName: 'VI' }
  };
  
  const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
  }
  
  $(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
      // detect user language
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      .use(i18nextBrowserLanguageDetector)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
          en: {
            translation: {
              welcome:{
                title:'Welcome to VLINKGROUP',
                desc:'VLINKGROUP is a pioneering enterprise, it’s primary objective being to create a symbiotic ecosystem of services and utilities which can seamlessly work both together.'
              },
              about:{
                title:'About us',
                desc:'VLINKGROUP was born at a time when the nail and beauty industry, particularly in the US, was facing many problems in maintaining and ensuring service quality while under competitive pressure. This, coupled with fierce intervention from authorities, has been causing increasing hardships throughout the industry, especially with smaller nail salons...',
                content:{
                  p_1:"VLINKGROUP is a pioneering enterprise, it’s primary objective being to create a symbiotic ecosystem of services and utilities which can seamlessly work both together and independent of each other within a trustworthy and safe environment.",
                  p_2:"VLINKGROUP was born at a time when the nail and beauty industry, particularly in the US, was (and still is) facing many problems in maintaining and ensuring service quality while under competitive pressure. This, coupled with fierce intervention from authorities, has been causing increasing hardships throughout the industry, especially with smaller nail salons.",
                  p_3:"VLINKGROUP recognizes the need for an ecosystem which provides all of the necessary utilities that an industry requires in a methodical and professional manner. Through its deep understanding of the difficulties and shortcomings currently being faced in the nail and beauty industry, Vlinkgroup has developed a specific vision and strategy which aims to improve business quality and guarantee ROI for investors.",
                  p_4:"VLINKGROUP aims to give struggling businesses a competitive advantage by bringing them together under one ecosystem. Specifically, Vlinkgroup will manage and influence the process of personnel training, quality assurance, facilities and legal procedures to create the best conditions for workers and business owners alike, helping them to feel rest assured in their work and create a confident and welcoming environment for new customers."
                }
              },
              core:{
                title:'Core Values',
                values:{
                  value_1:{
                    title:'RESPONSIBILITY',
                    item_1:'Community',
                    item_2:'Investors',
                    item_3:'Shareholders',
                    item_4:'Customers',
                    item_5:'Colleagues',
                    item_6:'To ourselves',
                  },
                  value_2:{
                    title:'INNOVATION',
                    item_1:'Pioneer',
                    item_2:'Speed',
                    item_3:'Quality',
                    item_4:'Low Cost',
                  },
                  value_3:{
                    title:'SERVICE LEADERSHIP',
                    item_1:'Synergistic relationship',
                    item_2:'<strong>PROACTIVE</strong> listening',
                    item_3:'Encouraging <strong>DEVELOPMENT</strong> and <strong>GROWTH</strong> of people',
                    item_4:'Be a role model',
                    item_5:'<strong>INSPIRE</strong>',
                    item_6:'Foster successful outcomes',
                  },
                  value_4:{
                    title:'EMPOWERMENT',
                    item_1:'Giving <strong>TRUST</strong>',
                    item_2:'Provide breaking <strong>OPPORTUNITIES</strong>',
                    item_3:'Supporting <strong>AUTONOMY</strong>',
                  },
                  value_5:{
                    title:'RESPECT',
                    item_1:'Value people',
                    item_2:'With <strong>DIGNITY</strong> and <strong>PROFESSIONALISM</strong>',
                  }
                }
              },
              ecosystem:{
                title:'Ecosystem',
                desc:'VLINKGROUP embraces the future, incorporating technologies such as building Apps, blockchain review & rating and ERP management across the entire Ecosystem.While keeping its finger on the pulse of ‘leading-edge’. VLINKGROUP is also expanding its business internationally.'
              },
              why:{
                title: 'Why choose us?',
                desc:{
                  why_1:{
                    title: 'High Profit Rate',
                    content: "When investing in VLINKGROUP, you don't need to worry about setting up a nail salon from scratch because we have built an optimal management process thanks to the synergies of many different partners in the beauty industry."
                  },
                  why_2:{
                    title: 'Strong Relationship',
                    content: "We will make use of our existing intimate relationships to accelerate business growth, saving a lot of time and effort. Our network fully covers the essential parts of the nail industry: nail owners, construction, academy,..."
                  },
                  why_3:{
                    title: 'Deep Market Insight',
                    content: "Currently, the nail business is no longer attractive to investors. Many nail salons do not create the desired profit to last long. At VLINKGROUP, we understand those unsettled problems as well as possessing the ability to solve."
                  },
                  why_4:{
                    title: '24/7 Support Team',
                    content: "Currently, the nail business is no longer attractive to investors. Many nail salons do not create the desired profit to last long. At VLINKGROUP, we understand those unsettled problems as well as possessing the ability to."
                  }
                }
              },
              roadmap:{
                title:'Roadmap',
                image:'<img srcset="./images/roadmap.en.png 2x"  alt="" loading="lazy">'
              },
              events:{
                title:'News - Events',
                list:{
                  event_1:{
                    title:'Training program of VLINKGROUP at SALA office',
                    desc:'Training program of VLINKGROUP at SALA office'
                  },
                  event_2:{
                    title:'The introductory program of investment cooperation and settlement in the US with VLINKGROUP.',
                    desc:'The introductory program of investment cooperation and settlement in the US with VLINKGROUP.'
                  },
                  event_3:{
                    title:'6/8 Event-Launching E-commerce platform VLINK MART',
                    desc:'In addition to the launch of the VLINK MART e-commerce platform, this is one of the first events held in VietNam with the purpose of introducing a multi-industry ecosystem along with an advanced information technology platform in a detailed way. Accompanying the program is the direct sharing of the Founder and Chairman of VLINKGROUP.',
                    desc_1:'Moreover, the program also updates the results of VLINKGROUP that have been implemented during the past time. Besides, this is also an opportunity to share strategic planning with development progress along with a spectacular route to connect the talented elites of Vietnam globally, creating a solid foundation for the customer service and accompanies with investors.'
                  },
                  event_4:{
                    title:'VLINKGROUP expands international cooperation with OMANEE GROUP in DUBAI',
                    desc:'Marking the expansion of international development cooperation, during the visit to cooperation with OMANEE Group last week in Dubai',
                    desc_1:'The two sides agreed to jointly contribute capital and exchange blockchain platform technology and jointly set up representative offices at each other’s headquarters in the US and Dubai.',
                    desc_2:'This cooperation brings strong community development power, expanding for both parties, bringing the two brands together on the stock exchange earlier than planned, in line with the spirit of connecting the international community to cooperate successfully by VLINKGROUP.'
                  },
                }
              },
              contact:{
                title_1:'Contact Us',
                title_2:'For more information',
                sub:'Provide us your email, phone number and brief requirements, we will contact you soon',
                form:{
                  row_1:'<input type="text" id="name" name="name" placeholder="Name" class="contact-input" required><input type="email" id="email" name="email" placeholder="E-mail" class="contact-input" required>',
                  row_2:'<input type="tel" maxlength="12" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="phone" name="phone" placeholder="Phone" class="contact-input" required><select name="Business-type" id="business" class="contact-input"><option style="padding-top: 10px;" value="" disabled selected hidden>Business Type</option><option style="padding-top: 10px;" value="Make an appointment">Make an appointment</option><option value="Partnership">Partnership</option><option value="Corporation">Corporation</option></select>',
                  row_3:'<textarea type="text" id="message" name="message" placeholder="Message" class="contact-input" maxlength="50"></textarea>',
                  name: 'Name',
                  email: 'E-mail',
                  phone: 'Phone',
                  Business: 'Business Type',
                  message: 'Message'
                }
              },
              team:{
                title:'Our Team',
                bod:'FOUNDERS & TOP BOD',
                manager:'OPERATIONS MANAGEMENT TEAM',
                advisor:'ADVISORY BOARD',
                tech:'TECH TEAM'
              },
              menu:{
                home:'Home',
                about: 'About us',
                core: 'Core values',
                eco: 'Ecosystem',
                why: 'Why choose us?',
                roadmap: 'Roadmap',
                events:'News & Events',
                contact: 'Contact',
                team: 'Our team'
              },
              footer:{
                link:'LINKS',
                news: 'NEWSLETTER',
                sub_new:'Over 25000 people have subscribed',
                office: '<strong>Office:</strong><br/>5444 Westheimer Rd, Suite 1000, Houston Texas 77056 USA',
                contact:'<strong>Contact:</strong><br/><a href="tel:8327993583" style="color:#fff">+1(832) 799-3583</a><br/><a href="mailto:info@vlinkgroup.net" style="color:#fff">info@vlinkgroup.net</a>',
                coppyright:'Copyright @ 2022 VLINKGROUP',
                privacy: 'Privacy & Terms',
                ct_us: 'Contact us'
              },
              button:{
                watch:'<i class="fa fa-play pr-10"></i>Watch Video',
                read:'Read more',
                view:'View all of VLINK',
                submit:'Submit'
              }
            }
          },
          vi: {
            translation: {
              welcome:{
                title:'Chào mừng tới VLINKGROUP',
                desc:'VLINKGROUP là một doanh nghiệp tiên phong, mục tiêu chính là tạo ra một hệ sinh thái cộng sinh gồm các dịch vụ và tiện ích có thể hoạt động liền mạch cả hai cùng nhau.'
              },
              about:{
                title:'Về chúng tôi',
                desc:'VLINKGROUP ra đời vào thời điểm ngành nail và làm đẹp, cụ thể là ở Mỹ, đang đối mặt với nhiều vấn đề trong việc duy trì và đảm bảo chất lượng dịch vụ trong khi chịu sức ép cạnh tranh. Điều này cùng với sự can thiệp quyết liệt của các cơ quan chức năng đã và đang gây ra những khó khăn ngày càng tăng trong toàn ngành, đặc biệt là với các tiệm nail nhỏ hơn....',
                content:{
                  p_1:"VLINKGROUP là một doanh nghiệp tiên phong, mục tiêu chính là tạo ra một hệ sinh thái cộng sinh gồm các dịch vụ và tiện ích có thể hoạt động liền mạch cả hai cùng nhau và độc lập với nhau trong một môi trường đáng tin cậy và an toàn.",
                  p_2:"VLINKGROUP ra đời vào thời điểm ngành nail và làm đẹp, cụ thể là ở Mỹ, đang (và vẫn đang) đối mặt với nhiều vấn đề trong việc duy trì và đảm bảo chất lượng dịch vụ trong khi chịu sức ép cạnh tranh. Điều này cùng với sự can thiệp quyết liệt của các cơ quan chức năng đã và đang gây ra những khó khăn ngày càng tăng trong toàn ngành, đặc biệt là với các tiệm nail nhỏ hơn.",
                  p_3:"VLINKGROUP nhận ra sự cần thiết của một hệ sinh thái cung cấp tất cả các tiện ích cần thiết mà một ngành yêu cầu một cách bài bản và chuyên nghiệp. Bằng sự thấu hiểu sâu sắc những khó khăn và tồn tại hiện nay trong ngành nail và làm đẹp, Vlinkgroup đã xây dựng một tầm nhìn và chiến lược cụ thể nhằm nâng cao chất lượng kinh doanh và đảm bảo ROI cho các nhà đầu tư.",
                  p_4:"VLINKGROUP nhằm mang lại cho các doanh nghiệp đang gặp khó khăn lợi thế cạnh tranh bằng cách tập hợp họ lại với nhau trong một hệ sinh thái. Cụ thể, Vlinkgroup sẽ quản lý và tác động đến quá trình đào tạo nhân sự, đảm bảo chất lượng, cơ sở vật chất, thủ tục pháp lý nhằm tạo điều kiện tốt nhất cho người lao động cũng như chủ doanh nghiệp, giúp họ yên tâm công tác và tạo môi trường tự tin, thân thiện với môi trường mới. khách hàng."
                }
              },
              core:{
                title:'Giá trị cốt lõi',
                values:{
                  value_1:{
                    title:'TRÁCH NHIỆM',
                    item_1:'Cộng Đồng',
                    item_2:'Nhà Đầu Tư',
                    item_3:'Cổ Đông',
                    item_4:'Khách Hàng',
                    item_5:'Đồng Nghiệp',
                    item_6:'Chúng Tôi',
                  },
                  value_2:{
                    title:'TRÁCH NHIỆM',
                    item_1:'Tiên Phong',
                    item_2:'Tốc Độ',
                    item_3:'Chất Lượng',
                    item_4:'Chi Phí Phải Chăng',
                  },
                  value_3:{
                    title:'LÃNH ĐẠO DỊCH VỤ',
                    item_1:'Quan Hệ Tương Hỗ',
                    item_2:'<strong>CHỦ ĐỘNG</strong> Lắng Nghe',
                    item_3:'Khích Lệ <strong>SỰ PHÁT TRIỂN</strong> và <strong>Đổi Mới</strong>',
                    item_4:'Là Một Hình Mẫu Lý Tưởng',
                    item_5:'<strong>TRUYỀN CẢM HỨNG</strong>',
                    item_6:'Đẩy Mạnh Kết Quả Thành Công',
                  },
                  value_4:{
                    title:'TRAO QUYỀN',
                    item_1:'Tạo Dựng <strong>NIỀM TIN</strong>',
                    item_2:'Cung Cấp <strong>CƠ HỘI</strong> Bức Phá',
                    item_3:'Hỗ Trợ <strong>QUYỀN TỰ CHỦ</strong>',
                  },
                  value_5:{
                    title:'TÔN TRỌNG',
                    item_1:'Đề Cao Con Người',
                    item_2:'Với <strong>NHÂN PHẨM </strong> và <strong>SỰ CHUYÊN NGHIỆP</strong>',
                  }
                }
              },
              ecosystem:{
                title:'Hệ sinh thái',
                desc:'VLINKGROUP đón đầu tương lai, kết nối công nghệ bao gồm xây dựng ứng dụng, đánh giá và xếp hạng blockchain cũng như quản lý ERP trên toàn bộ Hệ thống sinh thái. Trong khi vẫn bắt mạch được tình hình của “Công nghệ mũi nhọn”. VLINKGROUP cũng đang mở rộng hoạt động kinh doanh trên phạm vi toàn cầu.'
              },
              why:{
                title: 'Tại Sao Chọn Chúng Tôi ?',
                desc:{
                  why_1:{
                    title: 'Tỷ Lệ Lợi Nhuận Cao',
                    content: "Đầu tư với VLINKGROUP bạn không cần phải lo lắng về việc thiết lập và quản lý, chúng tôi đã xây dựng sẵn với hệ thống và quy trình quản lý tối ưu nhờ vào sự cộng lực của nhiều đối tác khác nhau trong lĩnh vực làm đẹp."
                  },
                  why_2:{
                    title: 'Mạng Lưới Đối Tác Đa Ngành, Đa Lĩnh Vực',
                    content: "Sử dụng mối quan hệ hiện hữu sẵn có của chúng tôi để đẩy nhanh tốc độ tăng trưởng kinh doanh, tiết kiệm được nhiều thời gian và công sức nhờ vào mạng lưới đa ngành với đầy đủ các lĩnh vực cần thiết cho ngành làm móng và làm đẹp như: Tiệm làm móng, Apps và phần mềm ứng dụng quản lý, Công ty xây dựng, Học viện đào tạo,..."
                  },
                  why_3:{
                    title: 'Chúng Tôi Thấu Hiểu Thị Trường',
                    content: "Việc kinh doanh ngành làm móng không còn quá hấp dẫn nữa, nhiều tiệm đang phải đối đầu với chi phí và lợi nhuận và việc tồn tại cũng như phát triển lâu dài cùng nhiều vấn đề khác. VLINKGROUP thấu hiểu những vấn đề nan giải tồn đọng và có đủ điều kiện cũng như năng lực để giải quyết các bất cập này để đưa ngành lên một tầm cao mới."
                  },
                  why_4:{
                    title: 'Đội Ngũ Hỗ Trợ 24/7',
                    content: "Việc kinh doanh ngành làm móng không còn quá hấp dẫn nữa, nhiều tiệm đang phải đối đầu với chi phí và lợi nhuận và việc tồn tại cũng như phát triển lâu dài cùng nhiều vấn đề khác. VLINKGROUP thấu hiểu những vấn đề nan giải tồn đọng và có đủ điều kiện cũng như năng lực để giải quyết các bất cập này để đưa ngành lên một tầm cao mới."
                  }
                }
              },
              roadmap:{
                title:'Lộ Trình',
                image:'<img srcset="./images/roadmap.vi.png 2x"  alt="" loading="lazy"  >'
              },
              events:{
                title:'Tin tức - Sự kiện',
                list:{
                  event_1:{
                    title:'Chương trình đào tạo của VLINGKROUP tại văn phòng SALA',
                    desc:'Chương trình đào tạo của VLINGKROUP tại văn phòng SALA'
                  },
                  event_2:{
                    title:'Giới Thiệu Chương Trình Hợp Tác Đầu Tư Định Cư Tại Mỹ Cùng Tập Đoàn VLINGKROUP',
                    desc:'Giới Thiệu Chương Trình Hợp Tác Đầu Tư Định Cư Tại Mỹ Cùng Tập Đoàn VLINGKROUP'
                  },
                  event_3:{
                    title:'Sự kiện 6/8 - ra mắt nền tảng Thương mại điện tử VLINK MART',
                    desc:'Ngoài việc ra mắt Sàn thương mại điện tử VLINK MART thì đây là một trong những sự kiện lần đầu tiên tổ chức tại Việt Nam với mục đích giới thiệu hệ sinh thái đa ngành cùng với nền tảng công nghệ thông tin tiên tiến một cách chi tiết nhất, đồng hành với chương trình là sự chia sẻ trực tiếp của Nhà sáng lập, chủ tịch Tập đoàn VLINKGROUP.',
                    desc_1:'Hơn thế nữa chương trình còn cập nhật những thành quả của VLINKGROUP đã và đang thực hiện trong suốt thời gian vừa qua. Bên cạnh đó, đây còn là cơ hội chia sẻ hoạch định chiến lược với những bước tiến phát triển cùng với lộ trình kết nối ngoạn mục những tinh hoa tài năng của Đất Việt trên toàn cầu, tạo nên nền tảng vững chắc cho việc phục vụ khách hàng và đồng hành cùng các nhà đầu tư.'
                  },
                  event_4:{
                    title:'VLINKGROUP mở rộng hợp tác quốc tế với tập đoàn OMANEE tại Dubai',
                    desc:'Đánh dấu sự mở rộng hợp tác phát triển quốc tế, trong chuyến thăm hợp tác với Tập đoàn OMANEE tuần trước tại Dubai',
                    desc_1:'Hai bên nhất trí cùng góp vốn, trao đổi công nghệ nền tảng blockchain và cùng thành lập văn phòng đại diện tại trụ sở chính của nhau ở Mỹ và Dubai.',
                    desc_2:'Sự hợp tác này mang lại sức mạnh phát triển cộng đồng mạnh mẽ, mở rộng cho cả hai bên, đưa hai thương hiệu cùng lên sàn chứng khoán sớm hơn dự định, đúng với tinh thần kết nối cộng đồng quốc tế để hợp tác thành công của VLINKGROUP'
                  },
                }
              },
              contact:{
                title_1:'Hãy liên hệ với chúng tôi',
                title_2:'để có thêm thông tin',
                sub:'Cung cấp cho chúng tôi email, số điện thoại và các yêu cầu ngắn gọn của bạn, chúng tôi sẽ liên hệ với bạn sớm',
                form:{
                  row_1:'<input type="text" id="name" name="name" placeholder="Họ Tên" class="contact-input"><input type="email" id="email" name="email" placeholder="E-mail" class="contact-input">',
                  row_2:'<input type="text" id="phone" name="phone" placeholder="Số điện thoại" class="contact-input" ><select name="Business-type" id="business" class="contact-input"><option style="padding-top: 10px;" value="" disabled selected hidden>Chủ đề</option><option style="padding-top: 10px;" value="Hẹn gặp">Hẹn gặp</option><option value="Quan hệ đối tác">Quan hệ đối tác</option><option value="Tập đoàn">Tập đoàn</option></select>',
                  row_3:'<textarea type="text" id="message" name="message" placeholder="Lời nhắn" class="contact-input"></textarea>',
                  name: 'Họ Tên',
                  email: 'E-mail',
                  phone: 'SĐT',
                  Business: 'Loại hình kinh doanh',
                  message: 'Lời nhắn'
                }
              },
              team:{
                title:"Đội Ngũ Thành Viên",
                bod:'Nhà Sáng Lập',
                manager:'Ban Quản Lý',
                advisor:'Ban Cố Vấn',
                tech:'Đội Ngũ Kỹ Thuật'
              },
              menu:{
                home:'Trang chủ',
                about: 'Về chúng tôi',
                core: 'Giá trị cốt lõi',
                eco: 'Hệ sinh thái',
                why: 'Tại sao chọn chúng tôi',
                roadmap: 'Lộ trình',
                events:'Tin tức & Sự kiện',
                contact: 'Liên hệ',
                team: "Đội ngũ thành viên"
              },
              footer:{
                link:'LIÊN KẾT',
                news: 'BẢN TIN',
                sub_new:'Hơn 25000 người đã đăng ký',
                office: '<strong>Văn phòng:</strong><br/>5444 Westheimer Rd, Suite 1000, Houston Texas 77056 USA',
                contact:'<strong>Liên hệ:</strong><br/><a href="tel:8327993583" style="color:#fff">+1(832) 799-3583</a><br/><a href="mailto:info@vlinkgroup.net" style="color:#fff">info@vlinkgroup.net</a>',
                coppyright:'Bản quyền @ 2022 VLINKGROUP',
                privacy: 'Quyền riêng tư & Điều khoản',
                ct_us: 'Liên hệ'
              },
              button:{
                watch:'<i class="fa fa-play pr-10"></i>Xem Video',
                read:'Xem thêm',
                view:'Xem tất cả',
                submit:'Gửi'
              }
            }
          }
        }
      }, (err, t) => {
        if (err) return console.error(err);
  
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  
        // fill language switcher
        Object.keys(lngs).map((lng) => {
          const opt = new Option(lngs[lng].nativeName, lng);
          if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
          }
          $('#languageSwitcher').append(opt);
        });
        $('#languageSwitcher').change((a, b, c) => {
          const chosenLng = $(this).find("option:selected").attr('value');
          i18next.changeLanguage(chosenLng, () => {
            rerender();
          });
        });
  
        rerender();
      });
  });