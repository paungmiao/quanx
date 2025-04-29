#!name=github429
#!desc=解决 GitHub 资源访问 429 问题
#!author=广告必须死Tg群
#!date=2025-04-29

[rewrite_local]
^https:\/\/(raw|gist)\.githubusercontent\.com\/ request-header Accept-Language en-US
^https:\/\/github\.com\/ request-header Accept-Language en-US

[mitm]
hostname = raw.githubusercontent.com, gist.githubusercontent.com, github.com
