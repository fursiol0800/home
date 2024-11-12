###  #!/nix/store/mm0pa3z7kk6jh1i9rkxqxjqmd8h1qpxf-bash-5.2p37/bin/bash  ###

#!/usr/bin/env bash zsh


export PATH=$PATH:/nix/store/nzaxq39f3wjbcjj1c80179mf8a27pzcm-dart-sass-1.80.5/bin:/nix/store/j2x574lb7dxj7ksc3gfbzn917hs6g5nk-fd-10.2.0/bin:/nix/store/pdrw6lilvfk2z9hqi370kzkz7n2gdj3z-btop-1.4.0/bin:/nix/store/nknka9rgif83wdqhi7xj8s1m3r2ykj5l-pipewire-1.2.5/bin:/nix/store/dl087c9ph8lni59k5qzibjz9ysj374g3-bluez-5.78/bin:/nix/store/4j657ag40n77vsxwr0gh8j9rndxldc6k-bluez-tools-0-unstable-2020-10-24/bin:/nix/store/ryq93s931bx5rj2ra6cxx3mbmk51pr6r-networkmanager-1.48.10/bin:/nix/store/njmyjnmvx19wr4zabcxjvfpcf28a49vh-matugen-2.3.0/bin:/nix/store/69k8cdv6hahrznvxw4i0c4lgqiqjqm5y-swww-0.9.5/bin:/nix/store/q9l7i6hqydhar4qwls153qfpb5q17b1p-grimblast-unstable-2024-01-11/bin:/nix/store/mbq03x5z2z34cgqpzgz7k1p4gjz760h2-gpu-screen-recorder-4.2.3/bin:/nix/store/6k7byvb4291px0mw1335d83fmz9djdq4-brightnessctl-0.5.1/bin:/nix/store/6827ya2il2hs6pfh4pkss5kiajlgwh27-gnome-bluetooth-47.1/bin:/nix/store/901c80rlps5q05bnjk1sj4zaz5k736nc-python3-3.12.7/bin
export GI_TYPELIB_PATH=/nix/store/8chsh68ym8kw5vmm0grd50m7a6dn5fdg-libgtop-2.41.3/lib/girepository-1.0:/nix/store/1aarnpr08jzcilrkwawdpr40xyfn7cj1-glib-2.82.1-bin/lib/girepository-1.0:$GI_TYPELIB_PATH
#/nix/store/8kfcfl3gszry2rq4gs8as45samavh157-ags-1.8.2/bin/ags -b hyprpanel -c /nix/store/lll01yh51lvgmz98h7zjhcjjcp22bkwy-hyprpanel-latest/config.js $@
/nix/store/8kfcfl3gszry2rq4gs8as45samavh157-ags-1.8.2/bin/ags -b hyprpanel -c ~/.config/hyprpanel/config.js $@
