import * as fs from 'fs';
import * as path from 'path';

const dir: string = "src/assets/";

fs.readdir(dir, (err, subDirs) => {
    if (err) throw err;

    subDirs.forEach(sub => {
        const subPath = path.join(dir, sub);
        fs.stat(subPath, (err, stats) => {
            if (err) throw err;

            if (!stats.isDirectory()) {
                console.log(`'src/assets/${sub}': () => import('../assets/${sub}'),`);
            } else {
                fs.readdir(subPath, (err, files) => {
                    if (err) throw err;

                    files.forEach(filename => {
                        console.log(`'src/assets/${sub}/${filename}': () => import('../assets/${sub}/${filename}'),`);
                    });
                });
            }
        });
    });
});