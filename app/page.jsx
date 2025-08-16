'use client';
import { useState } from 'react';

// 여기서부터는 제가 캔버스에서 만든 홈페이지 코드 전체 붙여넣기
// 함수명은 반드시 Page 로!
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = `mailto:contact@noeultech.co.kr?subject=%5B홈페이지문의%5D%20${encodeURIComponent(
    name || '문의'
  )}&body=${encodeURIComponent(`이름: ${name}\n이메일: ${email}\n내용: ${message}`)}`;

  const navItems = [
    { id: 'services', label: '서비스' },
    { id: 'industries', label: '적용 산업' },
    { id: 'products', label: '표준 제품' },
    { id: 'process', label: '진행 절차' },
    { id: 'work', label: '레퍼런스' },
    { id: 'contact', label: '문의' }
  ];

  return (
    <div>
      <h1>NoeulTech 홈페이지</h1>
      <p>여기는 기본 구조 테스트입니다. (정상 배포 확인용)</p>
    </div>
  );
}
