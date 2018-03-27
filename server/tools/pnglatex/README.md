# pnglatex
`pnglatex` is a small script that turns LaTeX formulas into png images. It's as simple as:

    $ pnglatex -f "E=mc^2"

If the image was created using `pnglatex` you can also reverse the process.

    $ pnglatex -r formula.png
    E=mc^2

## Installation
Download or clone the repository, then type

    # chmod +x pnglatex
    # cp pnglatex /usr/bin

## Dependencies
`pnglatex` depends on `dvipng`, `imagemagick`, `latex` and `optipng` packages.

    # yum -y install dvipng ImageMagick optipng

### Install TexLive

    # yum remove texlive*

Download TexLive installation script `install-tl-unx.tar.gz`（ http://www.tug.org/texlive/acquire-netinstall.html ）

    # tar -zvxf install-tl-unx.tar.gz
    # cd install-tl-xxxxxxxx
    # yum -y install perl-Tk perl-Digest-MD5
    # ./install-tl

手动下载并安装必须的宏包（ 下载地址：https://www.ctan.org ），将 `ins` 编译为 `sty` 并拷贝至 `/usr/share/texmf/tex/latex/amsmath` 目录下，然后执行 `texhash` 命令进行刷新。

+ `amsmath`
+ `mhchem`
  - `chemgreek`


## Options
+ `-b <color>` Set the background color
+ `-B <color>` Set the border color
+ `-d <dpi>` Set the output resolution to the specified dpi
+ `-e <environment>` Set the environment for the formula (i.e. `displaymath` or `eqnarray`)
+ `-f <formula>` The LaTeX formula
+ `-F <color>` Set the foreground color
+ `-h` Print the help message
+ `-H <header>` Input file in header
+ `-m <margin>` Set the margin
+ `-M` Strip meta information
+ `-o <file>` Specify the output file name
+ `-O` Optimize the image
+ `-p <packages>` A colon separated list of LaTeX package names
+ `-P <padding>` Set the padding
+ `-r <file>` Read an image and print the LaTeX formula
+ `-s <size>` Set the font size
+ `-S` Don't print image file name
+ `-v` Show version
