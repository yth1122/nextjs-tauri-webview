"use client";

import React, { useState } from 'react';

export default function Home() {
  // 기본 URL 설정
  const defaultUrl = "";
  const [webViewUrl] = useState(defaultUrl);

  return (
    <div style={{ padding: '0px' }}>
      {/* 지정한 URL을 웹뷰로 표시 */}
      {webViewUrl && (
        <iframe
          src={webViewUrl}
          style={{ width: '100%', height: '100vh', marginTop: '0px', border: '1px solid #ddd' }}
          title="Webview Display"
        />
      )}
    </div>
  );
}