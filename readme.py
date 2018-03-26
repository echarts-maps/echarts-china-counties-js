import json
import pinyin
import codecs
from jinja2 import Environment, FileSystemLoader


if __name__ == '__main__':
    with codecs.open('profile.json', 'r', 'utf-8') as f:
        content = json.load(f)

    with codecs.open('registry.json', 'r', 'utf-8') as f:
        registry = json.load(f)

    jinja2_env = Environment(
        loader=FileSystemLoader('./templates'),
        keep_trailing_newline=True)

    readme = jinja2_env.get_template('readme.md.jj2')
    sorted_provinces = sorted(content.keys(),
                              key=lambda x: pinyin.get(x, format='numerical'))
    md = readme.render(profiles=content,
                       sorted_provinces=sorted_provinces,
                       file_map=registry['PINYIN_MAP'],
                       count=len(registry['FILE_MAP']))
    with codecs.open('README.md', 'w', 'utf-8') as out:
        out.write(md)
