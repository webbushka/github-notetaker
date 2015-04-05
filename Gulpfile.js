var gulp = require('gulp'),
	path = require('path'),
	del = require('del'),
	historyApiFallback = require('connect-history-api-fallback');

var $ = require('gulp-load-plugins')({
	scope: ['devDependencies'],
	camelize: true,
	lazy: true
});


const ROOT = path.join(__dirname),
	APP = path.join(ROOT, 'app'),
	PUBLIC = path.join(ROOT, 'public'),
	IMAGES = path.join(PUBLIC, 'images'),
	DIST = path.join(ROOT, 'dist'),
	FILES = {
		entry: path.join(APP, 'app.js'),
		index: path.join(PUBLIC, 'index.html'),
		serveHTML: path.join(DIST, 'index.html')
	};

gulp.task('clean', function(done) {
	del.sync([DIST]);
	done();
});

gulp.task('copy:html', function() {
	gulp.src(FILES.index)
		.pipe(gulp.dest(DIST))
		.pipe($.connect.reload());
});

gulp.task('copy:images', function() {
	gulp.src([IMAGES + '/**/*'], {base: IMAGES})
		.pipe(gulp.dest(DIST + '/images'))
		.pipe($.connect.reload());
});

gulp.task('scripts:build', function() {
	gulp.src(FILES.entry)
		.pipe($.webpack({
			output: {
				filename: '[name].js'
			},
			devtool: 'eval',
			watch: true,
			resolve: {
				alias: {
					'firebase': 'firebase/lib/firebase-web'
				}
			},
			module: {
				loaders: [{
					test: /\.js$/,
					exclude: /node_modules/,
					loaders: ['babel-loader']
				}]
			}
		}))
		.pipe(gulp.dest(DIST))
		.pipe($.connect.reload());
});

gulp.task('connect:start', function() {
		$.connect.server({
			root: DIST,
			livereload: true,
			middleware: function(connect, opt) {
				return [ historyApiFallback ];
			}
		});
		gulp.src(FILES.serveHTML)
			.pipe($.open('', {
				url: 'http://localhost:8080'
			}));
});

gulp.task('watch:html', function() {
		gulp.watch(FILES.index, ['copy:html']);
});

gulp.task('dev', [
	'copy:html',
	'copy:images',
	'scripts:build',
	'connect:start',
	'watch:html'
]);

gulp.task('default', $.taskListing);
