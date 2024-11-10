{ config, pkgs, ... }:

{
  
  #nixGL.packages = nixgl.packages;
  #nixGL.defaultWrapper = "mesa";
  #nixGL.offloadWrapper = "nvidiaPrime";
  #nixGL.installScripts = [ "mesa" "nvidiaPrime" ];
  # Home Manager needs a bit of information about you and the paths it should
  # manage.
  imports = [
      <catppuccin/modules/home-manager>
      ./scripts/scripts.nix
  ];

  home.username = "antonio";
  home.homeDirectory = "/home/antonio";
  catppuccin.enable = true;
  catppuccin.flavor = "mocha";
  #programs.stylix.enable = true;
  #programs.wezterm = {
 # enable = true;
 # enableZshIntegration = true;
 # enableBashIntegration = true;
 # extraConfig = builtins.readFile ../wezterm/wezterm.lua;
#};

# wayland.windowManager.hyprland ={
 #     enable = true;
      #plugins = [
      #      hyprland-plugins.packages.${pkgs.stdenv.hostPlatform.system}.borders-plus-plus
      #];
 #};

# programs.spicetify =
   #let
   #  spicePkgs = inputs.spicetify-nix.legacyPackages.${pkgs.system};
   #in
 #  {
  #   enable = true;
#     enabledExtensions = with spicePkgs.extensions; [
 #      adblock
 #      hidePodcasts
 #      shuffle # shuffle+ (special characters are sanitized out of extension names)
 #    ];
 #    theme = spicePkgs.themes.catppuccin;
#     colorScheme = "mocha";
  # };

  #xdg.mimeApps.enable = true;
  #xdg.mimeApps.associations.added = associations;
  #xdg.mimeApps.defaultApplications = associations;
  #theme.package = pkgs.catppuccin-gtk-theme;

#programs.nvf = {
#    enable = true;
# };

#inputs.spicetify-nix.homeManagerModules.default
# 
#wayland.windowManager.hyprland = {
#      enable = true;
      #plugins = [
      #   inputs.hyprland-plugins.packages.${pkgs.system}.borders-plus-plus
     #];
#  };

  #wayland.windowManager.hyprland.plugins = [
  #inputs.hyprland-plugins.packages.${pkgs.system}.borders-plus-plus
  #"/nix/store/9v6ggcxblwmsy65qwmj1plw2rcnrdcbw-borders-plus-plus-0.44.0/lib/libborders-plus-plus.so"
#];
  # This value determines the Home Manager release that your configuration is
  # compatible with. This helps avoid breakage when a new Home Manager release
  # introduces backwards incompatible changes.
  #
  # You should not change this value, even if you update Home Manager. If you do
  # want to update the value, then make sure to first check the Home Manager
  # release notes.
  home.stateVersion = "24.11"; # Please read the comment before changing.
  gtk = {
    #enable = true;
    iconTheme = {
      name = "Papirus-Dark";
      packages = pkgs.papirus-icon-theme;

    };
    theme.packages = pkgs.catppuccin-gtk;
    theme.name = "Catppuccin-Dark";
    gtk3.extraConfig = {
      gtk-application-prefer-dark-theme = 1;
    };
    gtk4.extraConfig = {
      gtk-application-prefer-dark-theme = 1;
    };
    font = {
      name = "JetBrainsMono Nerd Font";
      size = 14;
    };
  };


  # The home.packages option allows you to install Nix packages into your
  # environment.
  home.packages = [
    # # Adds the 'hello' command to your environment. It prints a friendly
    # # "Hello, world!" when run.
    # pkgs.hello
    #pkgs.nvf
    pkgs.hyprgui
    pkgs.htop
    pkgs.fortune
    #(config.lib.nixGL.wrapOffload pkgs.freecad)
    #(config.lib.nixGL.wrappers.nvidiaPrime pkgs.xonotic)
    #pkgs.hyprlandPlugins.borders-plus-plus
    #pkgs.hyprlandPlugins.hy3
    #pkgs.hyprlandPlugins.hyprtrails
    pkgs.tmux
    #pkgs.maxfetch
    #pkgs.catppuccin
    pkgs.vlc
    pkgs.zellij
    pkgs.lazygit
    pkgs.lazydocker
    pkgs.appimage-run
    pkgs.imv
    pkgs.qimgv
    pkgs.catppuccin-gtk
    pkgs.tokyonight-gtk-theme
    #pkgs.zen-browser
    #pkgs.chaotic.firefox-nightly
    #pkgs.spicetify
    #pkgs.nix-alien
    # # It is sometimes useful to fine-tune packages, for example, by applying
    # # overrides. You can do that directly here, just don't forget the
    # # parentheses. Maybe you want to install Nerd Fonts with a limited number of
    # # fonts?
     (pkgs.nerdfonts.override { fonts = [ "JetBrainsMono" ]; })

    # # You can also create simple shell scripts directly inside your
    # # configuration. For example, this adds a command 'my-hello' to your
    # # environment:
    # (pkgs.writeShellScriptBin "my-hello" ''
    #   echo "Hello, ${config.home.username}!"
    # '')
  ];

  # Home Manager is pretty good at managing dotfiles. The primary way to manage
  # plain files is through 'home.file'.
  home.file = {
    # # Building this configuration will create a copy of 'dotfiles/screenrc' in
    # # the Nix store. Activating the configuration will then make '~/.screenrc' a
    # # symlink to the Nix store copy.
    # ".screenrc".source = dotfiles/screenrc;

    # # You can also set the file content immediately.
    # ".gradle/gradle.properties".text = ''
    #   org.gradle.console=verbose
    #   org.gradle.daemon.idletimeout=3600000
    # '';
  };

  # Home Manager can also manage your environment variables through
  # 'home.sessionVariables'. These will be explicitly sourced when using a
  # shell provided by Home Manager. If you don't want to manage your shell
  # through Home Manager then you have to manually source 'hm-session-vars.sh'
  # located at either
  #
  #  ~/.nix-profile/etc/profile.d/hm-session-vars.sh
  #
  # or
  #
  #  ~/.local/state/nix/profiles/profile/etc/profile.d/hm-session-vars.sh
  #
  # or
  #
  #  /etc/profiles/per-user/antonio/etc/profile.d/hm-session-vars.sh
  #
  home.sessionVariables = {
     EDITOR = "nvim";
     TERMINAL = "kitty";
  };

#  catppuccin.enable = true;

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
}
