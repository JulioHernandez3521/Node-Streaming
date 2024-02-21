const NodeMediaServer = require('node-media-server');
//C:\ffmpeg-4.4-full_build\bin
//     ffmpeg: 'C:/ffmpeg-4.4-full_build/bin/ffmpeg.exe',
const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        mediaroot: './media',
        allow_origin: '*'
    },
    trans: {
        ffmpeg: '/opt/homebrew/bin/ffmpeg',
        tasks: [
            {
                app: 'live',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]',
                mp4: true,
                mp4Flags: '[movflags=frag_keyframe+empty_moov]',
            }
        ]
    },
    auth: {
        play: false,// TRUE: Indica que necesita la firma para poder repruducir el video en el panel admin
        publish: true,
        secret: 'CQCIAS&%2024?¡',
        api : true,
        api_user: 'admin',
        api_pass: 'nms2018',
    }
};

var nms = new NodeMediaServer(config)
nms.run();