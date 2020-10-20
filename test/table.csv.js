export default `
name,                           tag,            code,           description
identity,                       multihash,      0x00,           raw binary
cidv1,                          ipld,           0x01,           CIDv1
cidv2,                          ipld,           0x02,           CIDv2
cidv3,                          ipld,           0x03,           CIDv3
ip4,                            multiaddr,      0x04,
tcp,                            multiaddr,      0x06,
sha1,                           multihash,      0x11,
sha2-256,                       multihash,      0x12,
sha2-512,                       multihash,      0x13,
sha3-512,                       multihash,      0x14,
sha3-384,                       multihash,      0x15,
sha3-256,                       multihash,      0x16,
sha3-224,                       multihash,      0x17,
shake-128,                      multihash,      0x18,
shake-256,                      multihash,      0x19,
keccak-224,                     multihash,      0x1a,           keccak has variable output length. The number specifies the core length
keccak-256,                     multihash,      0x1b,
keccak-384,                     multihash,      0x1c,
keccak-512,                     multihash,      0x1d,
blake3,                         multihash,      0x1e,           BLAKE3 has a default 32 byte output length. The maximum length is (2^64)-1 bytes.
dccp,                           multiaddr,      0x21,
murmur3-128,                    multihash,      0x22,
murmur3-32,                     multihash,      0x23,
ip6,                            multiaddr,      0x29,
ip6zone,                        multiaddr,      0x2a,
path,                           namespace,      0x2f,           Namespace for string paths. Corresponds to / in ASCII.
multicodec,                     multiformat,    0x30,
multihash,                      multiformat,    0x31,
multiaddr,                      multiformat,    0x32,
multibase,                      multiformat,    0x33,
dns,                            multiaddr,      0x35,
dns4,                           multiaddr,      0x36,
dns6,                           multiaddr,      0x37,
dnsaddr,                        multiaddr,      0x38,
protobuf,                       serialization,  0x50,           Protocol Buffers
cbor,                           serialization,  0x51,           CBOR
raw,                            ipld,           0x55,           raw binary
dbl-sha2-256,                   multihash,      0x56,
rlp,                            serialization,  0x60,           recursive length prefix
bencode,                        serialization,  0x63,           bencode
dag-pb,                         ipld,           0x70,           MerkleDAG protobuf
dag-cbor,                       ipld,           0x71,           MerkleDAG cbor
libp2p-key,                     ipld,           0x72,           Libp2p Public Key
git-raw,                        ipld,           0x78,           Raw Git object
torrent-info,                   ipld,           0x7b,           Torrent file info field (bencoded)
torrent-file,                   ipld,           0x7c,           Torrent file (bencoded)
leofcoin-block,                 ipld,           0x81,           Leofcoin Block
leofcoin-tx,                    ipld,           0x82,           Leofcoin Transaction
leofcoin-pr,                    ipld,           0x83,           Leofcoin Peer Reputation
sctp,                           multiaddr,      0x84,
dag-jose,                       ipld,           0x85,           MerkleDAG JOSE
dag-cose,                       ipld,           0x86,           MerkleDAG COSE
eth-block,                      ipld,           0x90,           Ethereum Block (RLP)
eth-block-list,                 ipld,           0x91,           Ethereum Block List (RLP)
eth-tx-trie,                    ipld,           0x92,           Ethereum Transaction Trie (Eth-Trie)
eth-tx,                         ipld,           0x93,           Ethereum Transaction (RLP)
eth-tx-receipt-trie,            ipld,           0x94,           Ethereum Transaction Receipt Trie (Eth-Trie)
eth-tx-receipt,                 ipld,           0x95,           Ethereum Transaction Receipt (RLP)
eth-state-trie,                 ipld,           0x96,           Ethereum State Trie (Eth-Secure-Trie)
eth-account-snapshot,           ipld,           0x97,           Ethereum Account Snapshot (RLP)
eth-storage-trie,               ipld,           0x98,           Ethereum Contract Storage Trie (Eth-Secure-Trie)
bitcoin-block,                  ipld,           0xb0,           Bitcoin Block
bitcoin-tx,                     ipld,           0xb1,           Bitcoin Tx
bitcoin-witness-commitment,     ipld,           0xb2,           Bitcoin Witness Commitment
zcash-block,                    ipld,           0xc0,           Zcash Block
zcash-tx,                       ipld,           0xc1,           Zcash Tx
stellar-block,                  ipld,           0xd0,           Stellar Block
stellar-tx,                     ipld,           0xd1,           Stellar Tx
md4,                            multihash,      0xd4,
md5,                            multihash,      0xd5,
bmt,                            multihash,      0xd6,           Binary Merkle Tree Hash
decred-block,                   ipld,           0xe0,           Decred Block
decred-tx,                      ipld,           0xe1,           Decred Tx
ipld-ns,                        namespace,      0xe2,           IPLD path
ipfs-ns,                        namespace,      0xe3,           IPFS path
swarm-ns,                       namespace,      0xe4,           Swarm path
ipns-ns,                        namespace,      0xe5,           IPNS path
zeronet,                        namespace,      0xe6,           ZeroNet site address
secp256k1-pub,                  key,            0xe7,           Secp256k1 public key
bls12_381-g1-pub,               key,            0xea,           BLS12-381 public key in the G1 field
bls12_381-g2-pub,               key,            0xeb,           BLS12-381 public key in the G2 field
x25519-pub,                     key,            0xec,           Curve25519 public key
ed25519-pub,                    key,            0xed,           Ed25519 public key
dash-block,                     ipld,           0xf0,           Dash Block
dash-tx,                        ipld,           0xf1,           Dash Tx
swarm-manifest,                 ipld,           0xfa,           Swarm Manifest
swarm-feed,                     ipld,           0xfb,           Swarm Feed
udp,                            multiaddr,      0x0111,
p2p-webrtc-star,                multiaddr,      0x0113,
p2p-webrtc-direct,              multiaddr,      0x0114,
p2p-stardust,                   multiaddr,      0x0115,
p2p-circuit,                    multiaddr,      0x0122,
dag-json,                       ipld,           0x0129,         MerkleDAG json
udt,                            multiaddr,      0x012d,
utp,                            multiaddr,      0x012e,
unix,                           multiaddr,      0x0190,
p2p,                            multiaddr,      0x01a5,         libp2p
ipfs,                           multiaddr,      0x01a5,         libp2p (deprecated)
https,                          multiaddr,      0x01bb,
onion,                          multiaddr,      0x01bc,
onion3,                         multiaddr,      0x01bd,
garlic64,                       multiaddr,      0x01be,         I2P base64 (raw public key)
garlic32,                       multiaddr,      0x01bf,         I2P base32 (hashed public key or encoded public key/checksum+optional secret)
tls,                            multiaddr,      0x01c0,
quic,                           multiaddr,      0x01cc,
ws,                             multiaddr,      0x01dd,
wss,                            multiaddr,      0x01de,
p2p-websocket-star,             multiaddr,      0x01df,
http,                           multiaddr,      0x01e0,
json,                           serialization,  0x0200,         JSON (UTF-8-encoded)
messagepack,                    serialization,  0x0201,         MessagePack
libp2p-peer-record,             libp2p,         0x0301,         libp2p peer record type
sha2-256-trunc254-padded,       multihash,      0x1012,         SHA2-256 with the two most significant bits from the last byte zeroed (as via a mask with 0b00111111) - used for proving trees as in Filecoin
ripemd-128,                     multihash,      0x1052,
ripemd-160,                     multihash,      0x1053,
ripemd-256,                     multihash,      0x1054,
ripemd-320,                     multihash,      0x1055,
x11,                            multihash,      0x1100,
p256-pub,                       key,            0x1200,         P-256 public Key
p384-pub,                       key,            0x1201,         P-384 public Key
p521-pub,                       key,            0x1202,         P-521 public Key
ed448-pub,                      key,            0x1203,         Ed448 public Key
x448-pub,                       key,            0x1204,         X448 public Key
kangarootwelve,                 multihash,      0x1d01,         KangarooTwelve is an extendable-output hash function based on Keccak-p
sm3-256,                        multihash,      0x534d,
blake2b-8,                      multihash,      0xb201,         Blake2b consists of 64 output lengths that give different hashes
blake2b-16,                     multihash,      0xb202,
blake2b-24,                     multihash,      0xb203,
blake2b-32,                     multihash,      0xb204,
blake2b-40,                     multihash,      0xb205,
blake2b-48,                     multihash,      0xb206,
blake2b-56,                     multihash,      0xb207,
blake2b-64,                     multihash,      0xb208,
blake2b-72,                     multihash,      0xb209,
blake2b-80,                     multihash,      0xb20a,
blake2b-88,                     multihash,      0xb20b,
blake2b-96,                     multihash,      0xb20c,
blake2b-104,                    multihash,      0xb20d,
blake2b-112,                    multihash,      0xb20e,
blake2b-120,                    multihash,      0xb20f,
blake2b-128,                    multihash,      0xb210,
blake2b-136,                    multihash,      0xb211,
blake2b-144,                    multihash,      0xb212,
blake2b-152,                    multihash,      0xb213,
blake2b-160,                    multihash,      0xb214,
blake2b-168,                    multihash,      0xb215,
blake2b-176,                    multihash,      0xb216,
blake2b-184,                    multihash,      0xb217,
blake2b-192,                    multihash,      0xb218,
blake2b-200,                    multihash,      0xb219,
blake2b-208,                    multihash,      0xb21a,
blake2b-216,                    multihash,      0xb21b,
blake2b-224,                    multihash,      0xb21c,
blake2b-232,                    multihash,      0xb21d,
blake2b-240,                    multihash,      0xb21e,
blake2b-248,                    multihash,      0xb21f,
blake2b-256,                    multihash,      0xb220,
blake2b-264,                    multihash,      0xb221,
blake2b-272,                    multihash,      0xb222,
blake2b-280,                    multihash,      0xb223,
blake2b-288,                    multihash,      0xb224,
blake2b-296,                    multihash,      0xb225,
blake2b-304,                    multihash,      0xb226,
blake2b-312,                    multihash,      0xb227,
blake2b-320,                    multihash,      0xb228,
blake2b-328,                    multihash,      0xb229,
blake2b-336,                    multihash,      0xb22a,
blake2b-344,                    multihash,      0xb22b,
blake2b-352,                    multihash,      0xb22c,
blake2b-360,                    multihash,      0xb22d,
blake2b-368,                    multihash,      0xb22e,
blake2b-376,                    multihash,      0xb22f,
blake2b-384,                    multihash,      0xb230,
blake2b-392,                    multihash,      0xb231,
blake2b-400,                    multihash,      0xb232,
blake2b-408,                    multihash,      0xb233,
blake2b-416,                    multihash,      0xb234,
blake2b-424,                    multihash,      0xb235,
blake2b-432,                    multihash,      0xb236,
blake2b-440,                    multihash,      0xb237,
blake2b-448,                    multihash,      0xb238,
blake2b-456,                    multihash,      0xb239,
blake2b-464,                    multihash,      0xb23a,
blake2b-472,                    multihash,      0xb23b,
blake2b-480,                    multihash,      0xb23c,
blake2b-488,                    multihash,      0xb23d,
blake2b-496,                    multihash,      0xb23e,
blake2b-504,                    multihash,      0xb23f,
blake2b-512,                    multihash,      0xb240,
blake2s-8,                      multihash,      0xb241,         Blake2s consists of 32 output lengths that give different hashes
blake2s-16,                     multihash,      0xb242,
blake2s-24,                     multihash,      0xb243,
blake2s-32,                     multihash,      0xb244,
blake2s-40,                     multihash,      0xb245,
blake2s-48,                     multihash,      0xb246,
blake2s-56,                     multihash,      0xb247,
blake2s-64,                     multihash,      0xb248,
blake2s-72,                     multihash,      0xb249,
blake2s-80,                     multihash,      0xb24a,
blake2s-88,                     multihash,      0xb24b,
blake2s-96,                     multihash,      0xb24c,
blake2s-104,                    multihash,      0xb24d,
blake2s-112,                    multihash,      0xb24e,
blake2s-120,                    multihash,      0xb24f,
blake2s-128,                    multihash,      0xb250,
blake2s-136,                    multihash,      0xb251,
blake2s-144,                    multihash,      0xb252,
blake2s-152,                    multihash,      0xb253,
blake2s-160,                    multihash,      0xb254,
blake2s-168,                    multihash,      0xb255,
blake2s-176,                    multihash,      0xb256,
blake2s-184,                    multihash,      0xb257,
blake2s-192,                    multihash,      0xb258,
blake2s-200,                    multihash,      0xb259,
blake2s-208,                    multihash,      0xb25a,
blake2s-216,                    multihash,      0xb25b,
blake2s-224,                    multihash,      0xb25c,
blake2s-232,                    multihash,      0xb25d,
blake2s-240,                    multihash,      0xb25e,
blake2s-248,                    multihash,      0xb25f,
blake2s-256,                    multihash,      0xb260,
skein256-8,                     multihash,      0xb301,         Skein256 consists of 32 output lengths that give different hashes
skein256-16,                    multihash,      0xb302,
skein256-24,                    multihash,      0xb303,
skein256-32,                    multihash,      0xb304,
skein256-40,                    multihash,      0xb305,
skein256-48,                    multihash,      0xb306,
skein256-56,                    multihash,      0xb307,
skein256-64,                    multihash,      0xb308,
skein256-72,                    multihash,      0xb309,
skein256-80,                    multihash,      0xb30a,
skein256-88,                    multihash,      0xb30b,
skein256-96,                    multihash,      0xb30c,
skein256-104,                   multihash,      0xb30d,
skein256-112,                   multihash,      0xb30e,
skein256-120,                   multihash,      0xb30f,
skein256-128,                   multihash,      0xb310,
skein256-136,                   multihash,      0xb311,
skein256-144,                   multihash,      0xb312,
skein256-152,                   multihash,      0xb313,
skein256-160,                   multihash,      0xb314,
skein256-168,                   multihash,      0xb315,
skein256-176,                   multihash,      0xb316,
skein256-184,                   multihash,      0xb317,
skein256-192,                   multihash,      0xb318,
skein256-200,                   multihash,      0xb319,
skein256-208,                   multihash,      0xb31a,
skein256-216,                   multihash,      0xb31b,
skein256-224,                   multihash,      0xb31c,
skein256-232,                   multihash,      0xb31d,
skein256-240,                   multihash,      0xb31e,
skein256-248,                   multihash,      0xb31f,
skein256-256,                   multihash,      0xb320,
skein512-8,                     multihash,      0xb321,         Skein512 consists of 64 output lengths that give different hashes
skein512-16,                    multihash,      0xb322,
skein512-24,                    multihash,      0xb323,
skein512-32,                    multihash,      0xb324,
skein512-40,                    multihash,      0xb325,
skein512-48,                    multihash,      0xb326,
skein512-56,                    multihash,      0xb327,
skein512-64,                    multihash,      0xb328,
skein512-72,                    multihash,      0xb329,
skein512-80,                    multihash,      0xb32a,
skein512-88,                    multihash,      0xb32b,
skein512-96,                    multihash,      0xb32c,
skein512-104,                   multihash,      0xb32d,
skein512-112,                   multihash,      0xb32e,
skein512-120,                   multihash,      0xb32f,
skein512-128,                   multihash,      0xb330,
skein512-136,                   multihash,      0xb331,
skein512-144,                   multihash,      0xb332,
skein512-152,                   multihash,      0xb333,
skein512-160,                   multihash,      0xb334,
skein512-168,                   multihash,      0xb335,
skein512-176,                   multihash,      0xb336,
skein512-184,                   multihash,      0xb337,
skein512-192,                   multihash,      0xb338,
skein512-200,                   multihash,      0xb339,
skein512-208,                   multihash,      0xb33a,
skein512-216,                   multihash,      0xb33b,
skein512-224,                   multihash,      0xb33c,
skein512-232,                   multihash,      0xb33d,
skein512-240,                   multihash,      0xb33e,
skein512-248,                   multihash,      0xb33f,
skein512-256,                   multihash,      0xb340,
skein512-264,                   multihash,      0xb341,
skein512-272,                   multihash,      0xb342,
skein512-280,                   multihash,      0xb343,
skein512-288,                   multihash,      0xb344,
skein512-296,                   multihash,      0xb345,
skein512-304,                   multihash,      0xb346,
skein512-312,                   multihash,      0xb347,
skein512-320,                   multihash,      0xb348,
skein512-328,                   multihash,      0xb349,
skein512-336,                   multihash,      0xb34a,
skein512-344,                   multihash,      0xb34b,
skein512-352,                   multihash,      0xb34c,
skein512-360,                   multihash,      0xb34d,
skein512-368,                   multihash,      0xb34e,
skein512-376,                   multihash,      0xb34f,
skein512-384,                   multihash,      0xb350,
skein512-392,                   multihash,      0xb351,
skein512-400,                   multihash,      0xb352,
skein512-408,                   multihash,      0xb353,
skein512-416,                   multihash,      0xb354,
skein512-424,                   multihash,      0xb355,
skein512-432,                   multihash,      0xb356,
skein512-440,                   multihash,      0xb357,
skein512-448,                   multihash,      0xb358,
skein512-456,                   multihash,      0xb359,
skein512-464,                   multihash,      0xb35a,
skein512-472,                   multihash,      0xb35b,
skein512-480,                   multihash,      0xb35c,
skein512-488,                   multihash,      0xb35d,
skein512-496,                   multihash,      0xb35e,
skein512-504,                   multihash,      0xb35f,
skein512-512,                   multihash,      0xb360,
skein1024-8,                    multihash,      0xb361,         Skein1024 consists of 128 output lengths that give different hashes
skein1024-16,                   multihash,      0xb362,
skein1024-24,                   multihash,      0xb363,
skein1024-32,                   multihash,      0xb364,
skein1024-40,                   multihash,      0xb365,
skein1024-48,                   multihash,      0xb366,
skein1024-56,                   multihash,      0xb367,
skein1024-64,                   multihash,      0xb368,
skein1024-72,                   multihash,      0xb369,
skein1024-80,                   multihash,      0xb36a,
skein1024-88,                   multihash,      0xb36b,
skein1024-96,                   multihash,      0xb36c,
skein1024-104,                  multihash,      0xb36d,
skein1024-112,                  multihash,      0xb36e,
skein1024-120,                  multihash,      0xb36f,
skein1024-128,                  multihash,      0xb370,
skein1024-136,                  multihash,      0xb371,
skein1024-144,                  multihash,      0xb372,
skein1024-152,                  multihash,      0xb373,
skein1024-160,                  multihash,      0xb374,
skein1024-168,                  multihash,      0xb375,
skein1024-176,                  multihash,      0xb376,
skein1024-184,                  multihash,      0xb377,
skein1024-192,                  multihash,      0xb378,
skein1024-200,                  multihash,      0xb379,
skein1024-208,                  multihash,      0xb37a,
skein1024-216,                  multihash,      0xb37b,
skein1024-224,                  multihash,      0xb37c,
skein1024-232,                  multihash,      0xb37d,
skein1024-240,                  multihash,      0xb37e,
skein1024-248,                  multihash,      0xb37f,
skein1024-256,                  multihash,      0xb380,
skein1024-264,                  multihash,      0xb381,
skein1024-272,                  multihash,      0xb382,
skein1024-280,                  multihash,      0xb383,
skein1024-288,                  multihash,      0xb384,
skein1024-296,                  multihash,      0xb385,
skein1024-304,                  multihash,      0xb386,
skein1024-312,                  multihash,      0xb387,
skein1024-320,                  multihash,      0xb388,
skein1024-328,                  multihash,      0xb389,
skein1024-336,                  multihash,      0xb38a,
skein1024-344,                  multihash,      0xb38b,
skein1024-352,                  multihash,      0xb38c,
skein1024-360,                  multihash,      0xb38d,
skein1024-368,                  multihash,      0xb38e,
skein1024-376,                  multihash,      0xb38f,
skein1024-384,                  multihash,      0xb390,
skein1024-392,                  multihash,      0xb391,
skein1024-400,                  multihash,      0xb392,
skein1024-408,                  multihash,      0xb393,
skein1024-416,                  multihash,      0xb394,
skein1024-424,                  multihash,      0xb395,
skein1024-432,                  multihash,      0xb396,
skein1024-440,                  multihash,      0xb397,
skein1024-448,                  multihash,      0xb398,
skein1024-456,                  multihash,      0xb399,
skein1024-464,                  multihash,      0xb39a,
skein1024-472,                  multihash,      0xb39b,
skein1024-480,                  multihash,      0xb39c,
skein1024-488,                  multihash,      0xb39d,
skein1024-496,                  multihash,      0xb39e,
skein1024-504,                  multihash,      0xb39f,
skein1024-512,                  multihash,      0xb3a0,
skein1024-520,                  multihash,      0xb3a1,
skein1024-528,                  multihash,      0xb3a2,
skein1024-536,                  multihash,      0xb3a3,
skein1024-544,                  multihash,      0xb3a4,
skein1024-552,                  multihash,      0xb3a5,
skein1024-560,                  multihash,      0xb3a6,
skein1024-568,                  multihash,      0xb3a7,
skein1024-576,                  multihash,      0xb3a8,
skein1024-584,                  multihash,      0xb3a9,
skein1024-592,                  multihash,      0xb3aa,
skein1024-600,                  multihash,      0xb3ab,
skein1024-608,                  multihash,      0xb3ac,
skein1024-616,                  multihash,      0xb3ad,
skein1024-624,                  multihash,      0xb3ae,
skein1024-632,                  multihash,      0xb3af,
skein1024-640,                  multihash,      0xb3b0,
skein1024-648,                  multihash,      0xb3b1,
skein1024-656,                  multihash,      0xb3b2,
skein1024-664,                  multihash,      0xb3b3,
skein1024-672,                  multihash,      0xb3b4,
skein1024-680,                  multihash,      0xb3b5,
skein1024-688,                  multihash,      0xb3b6,
skein1024-696,                  multihash,      0xb3b7,
skein1024-704,                  multihash,      0xb3b8,
skein1024-712,                  multihash,      0xb3b9,
skein1024-720,                  multihash,      0xb3ba,
skein1024-728,                  multihash,      0xb3bb,
skein1024-736,                  multihash,      0xb3bc,
skein1024-744,                  multihash,      0xb3bd,
skein1024-752,                  multihash,      0xb3be,
skein1024-760,                  multihash,      0xb3bf,
skein1024-768,                  multihash,      0xb3c0,
skein1024-776,                  multihash,      0xb3c1,
skein1024-784,                  multihash,      0xb3c2,
skein1024-792,                  multihash,      0xb3c3,
skein1024-800,                  multihash,      0xb3c4,
skein1024-808,                  multihash,      0xb3c5,
skein1024-816,                  multihash,      0xb3c6,
skein1024-824,                  multihash,      0xb3c7,
skein1024-832,                  multihash,      0xb3c8,
skein1024-840,                  multihash,      0xb3c9,
skein1024-848,                  multihash,      0xb3ca,
skein1024-856,                  multihash,      0xb3cb,
skein1024-864,                  multihash,      0xb3cc,
skein1024-872,                  multihash,      0xb3cd,
skein1024-880,                  multihash,      0xb3ce,
skein1024-888,                  multihash,      0xb3cf,
skein1024-896,                  multihash,      0xb3d0,
skein1024-904,                  multihash,      0xb3d1,
skein1024-912,                  multihash,      0xb3d2,
skein1024-920,                  multihash,      0xb3d3,
skein1024-928,                  multihash,      0xb3d4,
skein1024-936,                  multihash,      0xb3d5,
skein1024-944,                  multihash,      0xb3d6,
skein1024-952,                  multihash,      0xb3d7,
skein1024-960,                  multihash,      0xb3d8,
skein1024-968,                  multihash,      0xb3d9,
skein1024-976,                  multihash,      0xb3da,
skein1024-984,                  multihash,      0xb3db,
skein1024-992,                  multihash,      0xb3dc,
skein1024-1000,                 multihash,      0xb3dd,
skein1024-1008,                 multihash,      0xb3de,
skein1024-1016,                 multihash,      0xb3df,
skein1024-1024,                 multihash,      0xb3e0,
poseidon-bls12_381-a2-fc1,      multihash,      0xb401,         Poseidon using BLS12-381 and arity of 2 with Filecoin parameters
poseidon-bls12_381-a2-fc1-sc,   multihash,      0xb402,         Poseidon using BLS12-381 and arity of 2 with Filecoin parameters - high-security variant
zeroxcert-imprint-256,          zeroxcert,      0xce11,         0xcert Asset Imprint (root hash)
fil-commitment-unsealed,        filecoin,       0xf101,         Filecoin piece or sector data commitment merkle node/root (CommP & CommD)
fil-commitment-sealed,          filecoin,       0xf102,         Filecoin sector data commitment merkle node/root - sealed and replicated (CommR)
holochain-adr-v0,               holochain,      0x807124,       Holochain v0 address    + 8 R-S (63 x Base-32)
holochain-adr-v1,               holochain,      0x817124,       Holochain v1 address    + 8 R-S (63 x Base-32)
holochain-key-v0,               holochain,      0x947124,       Holochain v0 public key + 8 R-S (63 x Base-32)
holochain-key-v1,               holochain,      0x957124,       Holochain v1 public key + 8 R-S (63 x Base-32)
holochain-sig-v0,               holochain,      0xa27124,       Holochain v0 signature  + 8 R-S (63 x Base-32)
holochain-sig-v1,               holochain,      0xa37124,       Holochain v1 signature  + 8 R-S (63 x Base-32)
`
