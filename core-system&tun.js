{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "experimental": {
    "clash_api": {
      "external_controller": "127.0.0.1:9090",
      "external_ui": "web-ui",
      "secret": "",
      "external_ui_download_url": "https://github.com/MetaCubeX/Yacd-meta/archive/gh-pages.zip",
      "default_mode": "rule"
    },
    "cache_file": {
      "enabled": true,
      "store_fakeip": false
    }
  },
  "inbounds": [
    {
      "type": "tun",
      "interface_name": "sing-box",
      "inet4_address": "172.19.0.1/30",
      "mtu": 9000,
      "auto_route": true,
      "strict_route": true,
      "endpoint_independent_nat": false,
      "stack": "mixed",
      "platform": {
        "http_proxy": {
          "enabled": true,
          "server": "127.0.0.1",
          "server_port": 2080
        }
      },
      "sniff": true,
      "sniff_override_destination": false
    }
  ],
  "outbounds": [
    {
      "tag": "✈️ ‍起飞",
      "type": "selector",
      "outbounds": [
        "⚡ ‍低延迟",
        "{all}"
      ],
            "filter":[
        {"action":"exclude","keywords":["距离|到期|过期|expire|地址|网址|官网|网站|地址|每月|一年"]}
    },
    {
      "tag": "⚡ ‍低延迟",
      "type": "urltest",
      "outbounds": [
        "🇭🇰 香港01|Premium",
        "🇭🇰 香港02|Premium",
        "🇭🇰 香港01|负载均衡",
        "🇭🇰 香港02|负载均衡",
        "🇭🇰 香港03|负载均衡",
        "🇹🇼 台湾01",
        "🇹🇼 台湾02",
        "🇹🇼 台湾03",
        "🇹🇼 台湾04",
        "🇸🇬 新加坡01",
        "🇸🇬 新加坡02",
        "🇸🇬 新加坡03|移动特好用",
        "🇯🇵 日本01",
        "🇯🇵 日本02",
        "🇯🇵 日本03",
        "🇷🇺 俄罗斯",
        "🇺🇸 美国01",
        "🇺🇸 美国02",
        "🇺🇸 美国03|超牛逼",
        "🇧🇷 巴西"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": "300s",
      "tolerance": 150
    },
    {
      "tag": "🛩️ ‍墙内",
      "type": "selector",
      "outbounds": [
        "direct"
      ]
    },
    {
      "tag": "💩 ‍广告",
      "type": "selector",
      "outbounds": [
        "block"
      ]
    },
    {
      "tag": "🎏 ‍其他",
      "type": "selector",
      "outbounds": [
        "✈️ ‍起飞",
        "🛩️ ‍墙内"
      ]
    },
    {
      "tag": "🇭🇰 香港01|Premium",
      "type": "hysteria2",
      "server": "hkp.xjichang.buzz",
      "server_port": 45570,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "kr1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇭🇰 香港02|Premium",
      "type": "hysteria2",
      "server": "hkp.xjichang.buzz",
      "server_port": 45570,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "kr1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇭🇰 香港01|负载均衡",
      "type": "hysteria2",
      "server": "hk.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "hk4.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇭🇰 香港02|负载均衡",
      "type": "hysteria2",
      "server": "hk.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "hk2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇭🇰 香港03|负载均衡",
      "type": "hysteria2",
      "server": "hk.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "hk3.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇹🇼 台湾01",
      "type": "hysteria2",
      "server": "taiwan.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "taiwan.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇹🇼 台湾02",
      "type": "hysteria2",
      "server": "taiwan.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "sg1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇹🇼 台湾03",
      "type": "hysteria2",
      "server": "tw3.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "sg1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇹🇼 台湾04",
      "type": "hysteria2",
      "server": "tw4.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "sg1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇸🇬 新加坡01",
      "type": "hysteria2",
      "server": "45.145.154.73",
      "server_port": 443,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "sg2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇸🇬 新加坡02",
      "type": "hysteria2",
      "server": "185.151.146.145",
      "server_port": 443,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "sg2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇸🇬 新加坡03|移动特好用",
      "type": "hysteria2",
      "server": "sg3.xjichang.buzz",
      "server_port": 443,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "sg2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇯🇵 日本01",
      "type": "hysteria2",
      "server": "157.7.112.130",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "jp2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇯🇵 日本02",
      "type": "hysteria2",
      "server": "jp2.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "jp2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇯🇵 日本03",
      "type": "hysteria2",
      "server": "jp3.xjichang.buzz",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "jp2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇷🇺 俄罗斯",
      "type": "hysteria2",
      "server": "213.183.53.232",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "ru1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇺🇸 美国01",
      "type": "hysteria2",
      "server": "107.174.52.160",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "us1.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇺🇸 美国02",
      "type": "hysteria2",
      "server": "192.210.202.130",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "us2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇺🇸 美国03|超牛逼",
      "type": "hysteria2",
      "server": "216.73.158.127",
      "server_port": 45565,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "us2.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "tag": "🇧🇷 巴西",
      "type": "hysteria2",
      "server": "216.73.158.127",
      "server_port": 45570,
      "password": "ddd85791-3232-477c-bf94-b0404ffd9bf9",
      "up_mbps": 10,
      "down_mbps": 100,
      "tls": {
        "enabled": true,
        "server_name": "br01.xjichang.buzz",
        "insecure": true,
        "alpn": [
          "h3"
        ]
      }
    },
    {
      "type": "direct",
      "tag": "direct"
    },
    {
      "type": "dns",
      "tag": "dns-out"
    },
    {
      "type": "block",
      "tag": "block"
    }
  ],
  "route": {
    "rule_set": [
      {
        "tag": "CATEGORY-ADS",
        "type": "remote",
        "format": "binary",
        "url": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/category-ads-all.srs",
        "download_detour": "🛩️ ‍墙内"
      },
      {
        "tag": "GEOIP-CN",
        "type": "remote",
        "format": "binary",
        "url": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",
        "download_detour": "🛩️ ‍墙内"
      },
      {
        "tag": "GEOSITE-CN",
        "type": "remote",
        "format": "binary",
        "url": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/cn.srs",
        "download_detour": "🛩️ ‍墙内"
      },
      {
        "tag": "GEOLOCATION-!CN",
        "type": "remote",
        "format": "binary",
        "url": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs",
        "download_detour": "🛩️ ‍墙内"
      }
    ],
    "rules": [
      {
        "protocol": "dns",
        "port": 53,
        "outbound": "dns-out"
      },
      {
        "network": "udp",
        "port": 443,
        "outbound": "💩 ‍广告"
      },
      {
        "clash_mode": "direct",
        "outbound": "🛩️ ‍墙内"
      },
      {
        "clash_mode": "global",
        "outbound": "✈️ ‍起飞"
      },
      {
        "rule_set": "CATEGORY-ADS",
        "outbound": "💩 ‍广告"
      },
      {
        "ip_is_private": true,
        "outbound": "🛩️ ‍墙内"
      },
      {
        "rule_set": "GEOIP-CN",
        "outbound": "🛩️ ‍墙内"
      },
      {
        "rule_set": "GEOSITE-CN",
        "outbound": "🛩️ ‍墙内"
      },
      {
        "rule_set": "GEOLOCATION-!CN",
        "outbound": "✈️ ‍起飞"
      }
    ],
    "final": "🎏 ‍其他",
    "auto_detect_interface": true
  },
  "dns": {
    "servers": [
      {
        "tag": "remote-dns",
        "address": "tls://8.8.8.8",
        "address_resolver": "remote-resolver-dns",
        "detour": "✈️ ‍起飞"
      },
      {
        "tag": "local-dns",
        "address": "https://223.5.5.5/dns-query",
        "address_resolver": "resolver-dns",
        "detour": "direct"
      },
      {
        "tag": "resolver-dns",
        "address": "223.5.5.5",
        "detour": "direct"
      },
      {
        "tag": "remote-resolver-dns",
        "address": "8.8.8.8",
        "detour": "✈️ ‍起飞"
      },
      {
        "tag": "block",
        "address": "rcode://success"
      }
    ],
    "rules": [
      {
        "outbound": "any",
        "disable_cache": true,
        "server": "local-dns"
      },
      {
        "clash_mode": "direct",
        "server": "local-dns"
      },
      {
        "clash_mode": "global",
        "server": "remote-dns"
      },
      {
        "rule_set": "GEOSITE-CN",
        "server": "local-dns"
      },
      {
        "rule_set": "GEOLOCATION-!CN",
        "server": "remote-dns"
      }
    ],
    "fakeip": {
      "enabled": false,
      "inet4_range": "198.18.0.1/16",
      "inet6_range": "fc00::/18"
    },
    "final": "remote-dns",
    "strategy": "ipv4_only"
  }
}
