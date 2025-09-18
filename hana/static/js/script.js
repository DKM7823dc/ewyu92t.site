// 미녀 데이터 - a1.jpg부터 a15.jpg까지 사용, 모든 조합에 추천이 있도록 최적화 분포
const beautyData = [
  { 
    id: 1, 
    name: "소미 💕", 
    image: "static/image/girls/a1.jpg", 
    age: "young", 
    style: "cute", 
    body: "slim",
    tags: ["맛있어", "핥을 수 있어", "내사 가능"],
    priority: 1
  },
  { 
    id: 2, 
    name: "나나 🔥", 
    image: "static/image/girls/a2.jpg", 
    age: "mature", 
    style: "sexy", 
    body: "curvy",
    tags: ["3P 가능", "가슴애무 가능", "풍만한 가슴"],
    priority: 1
  },
  { 
    id: 3, 
    name: "리리 😘", 
    image: "static/image/girls/a3.jpg", 
    age: "young", 
    style: "pure", 
    body: "slim",
    tags: ["청순섹시", "무사용 가능", "어린 보지"],
    priority: 1
  },
  { 
    id: 4, 
    name: "안안 💼", 
    image: "static/image/girls/a4.jpg", 
    age: "elegant", 
    style: "mature", 
    body: "athletic",
    tags: ["조교 가능", "기술 좋아", "적극적"],
    priority: 1
  },
  { 
    id: 5, 
    name: "소아 🌟", 
    image: "static/image/girls/a5.jpg", 
    age: "young", 
    style: "cute", 
    body: "athletic",
    tags: ["활력섹시", "여러 번 가능", "체력 좋아"],
    priority: 2
  },
  { 
    id: 6, 
    name: "미엘 👑", 
    image: "static/image/girls/a6.jpg", 
    age: "mature", 
    style: "sexy", 
    body: "curvy",
    tags: ["여신급", "섹스 가능", "가슴 매우 커"],
    priority: 2
  },
  { 
    id: 7, 
    name: "소문 📚", 
    image: "static/image/girls/a7.jpg", 
    age: "young", 
    style: "pure", 
    body: "athletic",
    tags: ["문예섹시", "항문 가능", "탄탄함"],
    priority: 2
  },
  { 
    id: 8, 
    name: "청청 🌹", 
    image: "static/image/girls/a8.jpg", 
    age: "elegant", 
    style: "mature", 
    body: "slim",
    tags: ["놀 줄 알아", "구기 최고", "매우 섹시"],
    priority: 2
  },
  { 
    id: 9, 
    name: "탕탕 🎀", 
    image: "static/image/girls/a9.jpg", 
    age: "young", 
    style: "cute", 
    body: "slim",
    tags: ["귀여운 여자", "귀여운 보지", "신음소리"],
    priority: 3
  },
  { 
    id: 10, 
    name: "소매 🌶️", 
    image: "static/image/girls/a10.jpg", 
    age: "mature", 
    style: "sexy", 
    body: "athletic",
    tags: ["매우 야해", "기승위", "조여줘"],
    priority: 3
  },
  { 
    id: 11, 
    name: "백백 👼", 
    image: "static/image/girls/a11.jpg", 
    age: "elegant", 
    style: "pure", 
    body: "slim",
    tags: ["겉모습 순수", "속마음 섹시", "얼굴에 사정 가능"],
    priority: 3
  },
  { 
    id: 12, 
    name: "숙녀 언니 💋", 
    image: "static/image/girls/a12.jpg", 
    age: "elegant", 
    style: "mature", 
    body: "curvy",
    tags: ["매우 잘해", "자세 해제", "경험 풍부"],
    priority: 3
  },
  { 
    id: 13, 
    name: "청청 🌈", 
    image: "static/image/girls/a13.jpg", 
    age: "young", 
    style: "pure", 
    body: "curvy",
    tags: ["청춘", "큰 가슴 여자", "무사용 사정 가능"],
    priority: 4
  },
  { 
    id: 14, 
    name: "교교 🦋", 
    image: "static/image/girls/a14.jpg", 
    age: "mature", 
    style: "cute", 
    body: "slim",
    tags: ["애교부려", "말 잘 들어", "마음대로"],
    priority: 4
  },
  { 
    id: 15, 
    name: "소린 🏠", 
    image: "static/image/girls/a15.jpg", 
    age: "elegant", 
    style: "sexy", 
    body: "athletic",
    tags: ["이웃집형", "매우 섹시", "협조적"],
    priority: 4
  },

];

// 필터링 상태
let currentFilters = {
  age: 'all',
  style: 'all',
  body: 'all'
};

// 슬라이드 전시 상태
let currentSlide = 0;
let slidesPerView = 4; // 데스크톱에서 한 번에 4장의 카드 표시
let totalSlides = 0;
let autoSlideInterval = null; // 자동 슬라이드 타이머

// 초기화
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  createFloatingHearts();
  renderBeauties();
  setupFilterEvents();
  setupSliderEvents();
  startCountdown();
  updateSlidesPerView();
  
  // 반응형 처리
  window.addEventListener('resize', updateSlidesPerView);
});

// 파티클 배경 생성
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';

    particlesContainer.appendChild(particle);
  }
}

// 떠다니는 하트 생성
function createFloatingHearts() {
  const heartsContainer = document.getElementById('floatingHearts');
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 2000);
}

// 미녀 리스트 렌더링
function renderBeauties() {
  const beautySliderTrack = document.getElementById('beautySliderTrack');
  const filteredBeauties = filterBeauties();
  const resultCount = document.getElementById('resultCount');
  
  beautySliderTrack.innerHTML = '';
  
  filteredBeauties.forEach((beauty, index) => {
    const beautyCard = createBeautyCard(beauty, index);
    beautySliderTrack.appendChild(beautyCard);
  });
  
  // 슬라이더 상태 업데이트
  totalSlides = Math.max(0, filteredBeauties.length - slidesPerView);
  currentSlide = 0;
  updateSlider();
  createSliderIndicators();
  
  // 모바일에서 자동 슬라이드 시작
  if (window.innerWidth <= 768) {
    startAutoSlide();
  }
  
  // 추천 수량 알림 업데이트
  resultCount.textContent = filteredBeauties.length;
  
  // 추천 알림 텍스트 업데이트
  const hint = document.getElementById('recommendationHint');
  if (isAllFilters()) {
    hint.innerHTML = `${filteredBeauties.length}명의 미녀를 <span id="resultCount"></span>추천해드렸습니다`;
  } else {
    hint.innerHTML = `취향에 맞춰 ${filteredBeauties.length}명의 미녀를 <span id="resultCount"></span>추천해드렸습니다 💕`;
  }
}

// 모든 필터가 "전체"인지 확인
function isAllFilters() {
  return currentFilters.age === 'all' && 
         currentFilters.style === 'all' && 
         currentFilters.body === 'all';
}

// 미녀 필터링
function filterBeauties() {
  let filteredBeauties = beautyData.filter(beauty => {
    return (currentFilters.age === 'all' || beauty.age === currentFilters.age) &&
           (currentFilters.style === 'all' || beauty.style === currentFilters.style) &&
           (currentFilters.body === 'all' || beauty.body === currentFilters.body);
  });
  
  // 필터링 결과가 너무 적으면(4개 미만) 유사한 타입을 스마트 추천
  if (filteredBeauties.length < 4) {
    // 먼저 하나의 조건을 완화해보기
    const relaxedBeauties = beautyData.filter(beauty => {
      let ageMatch = currentFilters.age === 'all' || beauty.age === currentFilters.age;
      let styleMatch = currentFilters.style === 'all' || beauty.style === currentFilters.style;
      let bodyMatch = currentFilters.body === 'all' || beauty.body === currentFilters.body;
      
      // 최소 두 개 조건 매칭
      return (ageMatch && styleMatch) || (ageMatch && bodyMatch) || (styleMatch && bodyMatch);
    });
    
    // 결과 합치기, 중복 제거
    const combined = [...new Set([...filteredBeauties, ...relaxedBeauties])];
    filteredBeauties = combined.slice(0, Math.max(8, combined.length));
  }
  
  // 여전히 너무 적으면 랜덤으로 미녀를 추가해서 최소 6명 확보
  if (filteredBeauties.length < 6) {
    const remaining = beautyData.filter(beauty => 
      !filteredBeauties.some(filtered => filtered.id === beauty.id)
    );
    const shuffled = remaining.sort(() => 0.5 - Math.random());
    const needed = Math.min(6 - filteredBeauties.length, shuffled.length);
    filteredBeauties = [...filteredBeauties, ...shuffled.slice(0, needed)];
  }
  
  // 랜덤 순서로 섞어서 추천을 더 재미있게
  return filteredBeauties.sort(() => 0.5 - Math.random());
}

// 미녀 카드 생성
function createBeautyCard(beauty, index) {
  const card = document.createElement('div');
  card.className = 'beauty-card';
  card.style.animationDelay = (index * 0.1) + 's';
  
  card.innerHTML = `
    <img src="${beauty.image}" alt="${beauty.name}" class="beauty-image">
    <div class="beauty-info">
      <div class="beauty-name">${beauty.name}</div>
      <div class="beauty-tags">
        ${beauty.tags.map(tag => `<span class="beauty-tag">${tag}</span>`).join('')}
      </div>
      <div class="beauty-status">
        <span class="online-dot"></span>
        <span>온라인 중</span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => {
    trackLineClick();
  });
  
  return card;
}

// 필터 이벤트 설정
function setupFilterEvents() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filterType = btn.dataset.filter;
      const filterValue = btn.dataset.value;
      
      // 같은 타입의 다른 버튼 active 상태 제거
      document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(b => {
        b.classList.remove('active');
      });
      
      // 현재 버튼에 active 상태 추가
      btn.classList.add('active');
      
      // 필터 조건 업데이트
      currentFilters[filterType] = filterValue;
      
      // 미녀 리스트 재렌더링
      renderBeauties();
    });
  });
}

// 카운트다운 기능
function startCountdown() {
  let totalTime = 5 * 60; // 5분
  
  function updateCountdown() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
    document.getElementById('countdown').textContent = `${formattedMinutes}:${formattedSeconds}`;
    
    totalTime--;
    
    if (totalTime >= 0) {
      setTimeout(updateCountdown, 1000);
    } else {
      document.getElementById('countdown').textContent = "00:00";
    }
  }
  
  updateCountdown();
}

// 페이지당 슬라이드 표시 수 업데이트
function updateSlidesPerView() {
  if (window.innerWidth <= 768) {
    slidesPerView = 1; // 모바일에서 1장 표시
  } else if (window.innerWidth <= 1024) {
    slidesPerView = 3; // 태블릿에서 3장 표시
  } else {
    slidesPerView = 4; // 데스크톱에서 4장 표시
  }
  
  // 총 슬라이드 수 재계산
  const beautySliderTrack = document.getElementById('beautySliderTrack');
  if (beautySliderTrack) {
    const totalCards = beautySliderTrack.children.length;
    totalSlides = Math.max(0, totalCards - slidesPerView);
    currentSlide = Math.min(currentSlide, totalSlides);
    updateSlider();
    
    // 화면 크기에 따라 자동 슬라이드 시작 여부 결정
    if (window.innerWidth <= 768) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  }
}

// 슬라이더 이벤트 설정
function setupSliderEvents() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const sliderContainer = document.getElementById('beautySliderTrack');
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  // 모바일 터치 이벤트 - 터치 시 자동 슬라이드 일시정지
  if (sliderContainer && window.innerWidth <= 768) {
    sliderContainer.addEventListener('touchstart', stopAutoSlide);
    sliderContainer.addEventListener('touchend', () => {
      setTimeout(startAutoSlide, 2000); // 2초 후 자동 슬라이드 재시작
    });
  }
}

// 이전 슬라이드
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

// 다음 슬라이드
function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    updateSlider();
  }
}

// 슬라이더 위치 업데이트
function updateSlider() {
  const beautySliderTrack = document.getElementById('beautySliderTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (beautySliderTrack) {
    // 화면 크기에 따라 슬라이드 거리 동적 계산
    let slideDistance;
    if (window.innerWidth <= 768) {
      // 모바일: 매번 슬라이드로 카드 1장 거리만큼 이동
      const cardWidth = window.innerWidth * 0.95; // 95% 화면 너비
      const gap = 20; // 간격
      slideDistance = cardWidth + gap; // 카드 1장 거리만큼 이동
    } else if (window.innerWidth <= 1024) {
      slideDistance = 200; // 태블릿
    } else {
      slideDistance = 220; // 데스크톱
    }
    
    const translateX = -currentSlide * slideDistance;
    beautySliderTrack.style.transform = `translateX(${translateX}px)`;
  }
  
  // 버튼 상태 업데이트
  if (prevBtn) {
    prevBtn.disabled = currentSlide === 0;
    prevBtn.style.display = totalSlides <= 0 ? 'none' : 'flex';
  }
  if (nextBtn) {
    nextBtn.disabled = currentSlide >= totalSlides;
    nextBtn.style.display = totalSlides <= 0 ? 'none' : 'flex';
  }
  
  // 인디케이터 업데이트
  updateSliderIndicators();
}

// 자동 슬라이드 시작 (모바일만)
function startAutoSlide() {
  if (window.innerWidth <= 768 && totalSlides > 0) {
    // 기존 타이머 제거
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
    
    // 자동 슬라이드 설정, 3초마다 전환
    autoSlideInterval = setInterval(() => {
      if (currentSlide >= totalSlides) {
        currentSlide = 0; // 순환 재생
      } else {
        currentSlide++;
      }
      updateSlider();
    }, 3000);
  }
}

// 자동 슬라이드 정지
function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// 슬라이드 인디케이터 생성
function createSliderIndicators() {
  const indicatorsContainer = document.getElementById('sliderIndicators');
  if (!indicatorsContainer) return;
  
  indicatorsContainer.innerHTML = '';
  
  // 슬라이드할 콘텐츠가 없으면 인디케이터 숨기기
  if (totalSlides <= 0) {
    indicatorsContainer.style.display = 'none';
    return;
  }
  
  indicatorsContainer.style.display = 'flex';
  
  for (let i = 0; i <= totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'indicator-dot';
    if (i === currentSlide) {
      dot.classList.add('active');
    }
    
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateSlider();
    });
    
    indicatorsContainer.appendChild(dot);
  }
}

// 슬라이드 인디케이터 업데이트
function updateSliderIndicators() {
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}