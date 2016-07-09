import pluralize from '../helpers/pluralize';

let words = [
  'algorithm',
  'analog',
  'app',
  'application',
  'array',
  'backup',
  'bandwidth',
  'binary',
  'bit',
  'bitmap',
  'bite',
  'blog',
  'blogger',
  'bookmark',
  'boot',
  'broadband',
  'browser',
  'buffer',
  'bug',
  'bus',
  'byte',
  'cache',
  'caps lock',
  'captcha',
  'CD',
  'CD ROM',
  'client',
  'clip art',
  'clip board',
  'cloud computing',
  'command',
  'compile',
  'compress',
  'computer',
  'computer program',
  'configure',
  'cookie',
  'copy',
  'CPU (central processing unit)',
  'cybercrime',
  'cyberspace',
  'dashboard',
  'data',
  'database',
  'data mining',
  'debug',
  'decompress',
  'delete',
  'desktop',
  'development',
  'digital',
  'disk',
  'DNS (domain name system)',
  'document',
  'domain',
  'domain name',
  'dot',
  'dot matrix',
  'download',
  'drag',
  'DVD (digital versatile disc)',
  'dynamic',
  'email',
  'emoticon',
  'encrypt',
  'encryption',
  'enter',
  'exabyte',
  'FAQ (frequently asked questions)',
  'file',
  'finder',
  'firewall',
  'firmware',
  'flaming',
  'flash',
  'flash drive',
  'floppy disk',
  'flowchart',
  'folder',
  'font',
  'format',
  'frame',
  'freeware',
  'gigabyte',
  'graphics',
  'hack',
  'hacker',
  'hardware',
  'home page',
  'host',
  'html',
  'hyperlink',
  'hypertext',
  'icon',
  'inbox',
  'integer',
  'interface',
  'Internet',
  'IP address',
  'iteration',
  'Java',
  'joystick',
  'junk mail',
  'kernel',
  'key',
  'keyboard',
  'keyword',
  'laptop',
  'laser printer',
  'link',
  'login',
  'log out',
  'logic',
  'lurking',
  'mainframe',
  'macro',
  'malware',
  'media',
  'memory',
  'mirror',
  'modem',
  'monitor',
  'motherboard',
  'mouse',
  'multimedia',
  'net',
  'network',
  'node',
  'notebook computer',
  'offline',
  'online',
  'open source',
  'operating system',
  'option',
  'output',
  'page',
  'password',
  'paste',
  'path',
  'phishing',
  'piracy',
  'pirate',
  'platform',
  'plug in',
  'podcast',
  'pop up',
  'portal',
  'print',
  'printer',
  'privacy',
  'process',
  'program',
  'programmer',
  'protocol',
  'queue',
  'QWERTY',
  'RAM (random access memory)',
  'real time',
  'reboot',
  'resolution',
  'restore',
  'ROM (read only memory)',
  'root',
  'router',
  'runtime',
  'save',
  'scan',
  'scanner',
  'screen',
  'screenshot',
  'script',
  'scroll',
  'scroll bar',
  'search engine',
  'security',
  'server',
  'shareware',
  'shell',
  'shift',
  'shift key',
  'snapshot',
  'social networking',
  'software',
  'spam',
  'spammer',
  'spreadsheet',
  'status bar',
  'storage',
  'spyware',
  'supercomputer',
  'surf',
  'syntax',
  'table',
  'tag',
  'template',
  'terabyte',
  'teminal',
  'text editor',
  'thread',
  'toolbar',
  'trash',
  'Trojan horse',
  'typeface',
  'undo',
  'Unix',
  'upload',
  'user interface',
  'username',
  'URL',
  'user',
  'utility',
  'version',
  'virtual',
  'virtual memory',
  'virus',
  'web',
  'web host',
  'webmaster',
  'website',
  'widget',
  'window',
  'wireless',
  'wiki',
  'word processor',
  'workstation',
  'World Wide Web',
  'worm',
  'WWW',
  'XML',
  'zip'
];

export default (data) => {
  return pluralize(words);
}
