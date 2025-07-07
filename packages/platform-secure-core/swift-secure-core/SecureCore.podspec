# packages/swift-secure-core/SecureCore.podspec

Pod::Spec.new do |s|
  s.name             = 'SecureCore'
  s.version          = '1.0.0'
  s.summary          = 'A secure device ID manager.'
  s.homepage         = 'https://yourdomain.com'
  s.author           = { 'Jan' => 'jan@example.com' }
  s.license          = { :type => 'MIT' }

  s.source           = { :path => '.' }

  s.platform         = :ios, '13.0'
  s.swift_version    = '5.0'

  s.source_files     = 'Sources/**/*.{swift}'
end
