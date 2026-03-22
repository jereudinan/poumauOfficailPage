import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 이미지 최적화 기능은 정적 내보내기에서 지원되지 않으므로 비활성화 (필요 시)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
