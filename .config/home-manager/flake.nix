{
  description = "Home Manager configuration of antonio";

  inputs = {
    # Specify the source of Home Manager and Nixpkgs.
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    hyprpanel.url = "github:Jas-SinghFSU/HyprPanel";
    wezterm.url = "github:wez/wezterm?dir=nix";
    catppuccin.url = "github:catppuccin/nix";
  };

  outputs = inputs @ { nixpkgs, home-manager, hyprpanel, catppuccin, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        overlays = [
          inputs.hyprpanel.overlay
        ];
      };

    in {
      homeConfigurations."antonio" = home-manager.lib.homeManagerConfiguration {
        inherit pkgs;

        # Specify your home configuration modules here, for example,
        # the path to your home.nix.
        modules = [ 
        ./home.nix 
        catppuccin.homeManagerModules.catppuccin
        ];
        extraSpecialArgs = { inherit inputs; };
        # Optionally use extraSpecialArgs
        # to pass through arguments to home.nix
      };
    };
}
