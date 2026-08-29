// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sillypears.github.io',
	base: '/replay_docs',
	integrations: [
		starlight({
			title: 'Rivals 2 Replay Docs',
			description: 'Reverse-engineered .rpl format, payload bitstream, and tooling',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'Overview', slug: 'index' },
				{
					label: 'File Format',
					items: [
						{ label: 'Container (.rpl)', slug: 'guides/container' },
						{ label: 'Header TLV (88B)', slug: 'guides/header-tlv' },
						{ label: 'Stage / Skin Variants', slug: 'guides/stages' },
					],
				},
				{
					label: 'Payload',
					items: [
						{ label: 'Bitstream Primitives', slug: 'guides/bitstream' },
						{ label: 'Snapshot Framing', slug: 'guides/snapshots' },
						{ label: 'Input System (147-bit)', slug: 'guides/inputs' },
					],
				},
				{
					label: 'Pipeline',
					items: [
						{ label: 'File Write (NtWriteFile)', slug: 'guides/file-write' },
						{ label: 'Tooling', slug: 'guides/tooling' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Character IDs', slug: 'reference/characters' },
						{ label: 'Stage IDs', slug: 'reference/stages' },
						{ label: 'Protocol IDs', slug: 'reference/protocols' },
						{ label: 'Key Addresses', slug: 'reference/addresses' },
					],
				},
			],
		}),
	],
});
